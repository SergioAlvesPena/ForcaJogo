using JogoForcaMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace JogoForcaMVC.Controllers
{
    public class WordController : Controller
    {
        // GET: Word
        public ActionResult Index()
        {
           return SetWord();
        }

        [HttpGet]
        public ActionResult SetWord()
        {
            WordModel wm = new WordModel();
            Random rng = new Random();

            wm.ListWord.AddRange(new string[] { "casa", "carro", "televisao", "amarelo", "aviao", "bolo", "cama", "doce", "estojo", "acender", "basquete", "fugaz", "impacto", "enquete", "umbigo", "pacoca", "reportagem", "vaticano", "israel", "inseto", "camada", "primeiros", "lagarto", "homenageou", "assassinato", "diagnosticado", "coincidiu", "estiveram", "hectares", "dinamarques", "pachyramphus", "durante", "refrigeradores", "bicoin", "organizada", "voleibol", "localizada", "haplomitriales", "equipado", "internacionais", "contratada", "espanha" });
            wm.SelectedWord = wm.ListWord[rng.Next(0, 41)];
            wm.Lives = 5;
            HttpCookie SelectedWordCookie = new HttpCookie("SelectedWord");
            SelectedWordCookie.Value = wm.SelectedWord.ToString();
            Response.Cookies.Add(SelectedWordCookie);
            HttpCookie LivesCookie = new HttpCookie("Lives");
            LivesCookie.Value = wm.Lives.ToString();
            Response.Cookies.Add(LivesCookie);

            return View("Index", wm);
        }

        [HttpGet]
        public string GetWord(WordModel wm) 
        {
            return wm.SelectedWord;
        }
    }
}