using Microsoft.AspNetCore.Mvc;
using Mission2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Controllers
{
    public class FirstController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Form ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Form (FormResponseModel model)
        {
            return View();
        }
    }
}
