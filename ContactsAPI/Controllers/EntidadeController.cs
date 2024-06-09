using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace SuaAplicacao.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntidadeController : ControllerBase
    {
        private static List<Entidade> _entidades = new List<Entidade>();

        // GET: api/entidade
        [HttpGet]
        public ActionResult<IEnumerable<Entidade>> GetEntidades()
        {
            return _entidades;
        }

        // GET: api/entidade/5
        [HttpGet("{id}")]
        public ActionResult<Entidade> GetEntidade(int id)
        {
            var entidade = _entidades.FirstOrDefault(e => e.Id == id);
            if (entidade == null)
            {
                return NotFound();
            }
            return entidade;
        }

        // POST: api/entidade
        [HttpPost]
        public ActionResult<Entidade> PostEntidade(Entidade entidade)
        {
            _entidades.Add(entidade);
            return CreatedAtAction(nameof(GetEntidade), new { id = entidade.Id }, entidade);
        }

        // PUT: api/entidade/5
        [HttpPut("{id}")]
        public IActionResult PutEntidade(int id, Entidade entidade)
        {
            if (id != entidade.Id)
            {
                return BadRequest();
            }

            var index = _entidades.FindIndex(e => e.Id == id);
            if (index == -1)
            {
                return NotFound();
            }

            _entidades[index] = entidade;
            return NoContent();
        }

        // DELETE: api/entidade/5
        [HttpDelete("{id}")]
        public IActionResult DeleteEntidade(int id)
        {
            var index = _entidades.FindIndex(e => e.Id == id);
            if (index == -1)
            {
                return NotFound();
            }

            _entidades.RemoveAt(index);
            return NoContent();
        }
    }

    public class Entidade
    {
        public int Id { get; set; }
        // Adicione outros campos necessários aqui
    }
}
