using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JogoForcaMVC.Models
{
    public class WordModel
    {
        public List<string> ListWord = new List<string>();
        public List<string> ListWrongLetters = new List<string>();
        public List<string> DisplayedWord = new List<string>();
        public string SelectedWord { get; set; }
        public int Lives { get; set; }

    }
}