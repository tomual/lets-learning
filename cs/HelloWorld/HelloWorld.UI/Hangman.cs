using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld.UI
{
    class Hangman
    {
        private bool keepPlaying;
        private int guessesLeft;
        private string answer;
        private int lettersFound;

        private string[] guessedLetters;
        private int guessedLettersIndex;

        private string[] wordDisplay;

        public void Play()
        {
            SetUp();

            while(keepPlaying)
            {
                DisplayPuzzle();
                PromptUser();
            }

            DisplayResult();
            Console.ReadLine();
        }

        private void DisplayResult()
        {
            if(guessesLeft > 0)
            {
                Console.WriteLine("Player 2 guessed the word");
            }
            else
            {
                Console.WriteLine("Player 2 loses - word was {0}", answer);
            }
        }

        private void PromptUser()
        {
            bool validInput = false;
            while(!validInput)
            {
                Console.WriteLine("Player 2 guess a character or word:");
                validInput = ParseInput();
            }
        }

        private bool ParseInput()
        {
            string input = Console.ReadLine().ToUpper();
            if (input.Length > 1)
            {
                if (input == answer)
                {
                    Console.WriteLine("Player 2 guessed the word correctly");
                    keepPlaying = false;
                }
                else
                {
                    Console.WriteLine("Incorrect word guess");
                    guessesLeft--;
                }
            }
            else if(string.IsNullOrEmpty(input))
            {
                Console.WriteLine("Gotta enter something dude");
                return false;
            }
            else
            {
                if(guessedLetters.Contains(input))
                {
                    Console.WriteLine("Already guessed the letter {0}", input);
                    return false;
                }
                else
                {
                    bool correctGuess = false;
                    for (int i = 0; i < answer.Length; i++)
                    {
                        if(answer[i].ToString() == input)
                        {
                            wordDisplay[i] = input;
                            correctGuess = true;
                        }
                    }
                    
                    if(!correctGuess)
                    {
                        Console.WriteLine("Wrong guess");
                        guessesLeft--;
                    }
                    else
                    {
                        Console.WriteLine("Correct guess");
                        guessedLetters[guessedLettersIndex] = input;
                        guessedLettersIndex++;
                    }
                }
            }
            if(guessesLeft == 0)
            {
                keepPlaying = false;
            }
            return true;
        }

        private void DisplayPuzzle()
        {
            Console.WriteLine("\nPuzzle: ");
            for (int i = 0; i < wordDisplay.Length; i++)
            {
                Console.Write("{0} ", wordDisplay[i]);
            }

            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Player 2 you have {0} guesses left.", guessesLeft);
            Console.WriteLine();

        }

        private void SetUp()
        {
            guessesLeft = 5;
            keepPlaying = true;
            guessedLetters = new string[26];
            guessedLettersIndex = 0;
            GetWordFromPlayer();
            CreateWordDisplay();
        }

        private void CreateWordDisplay()
        {
            wordDisplay = new string[answer.Length];
            for (int i = 0; i < wordDisplay.Length; i++)
            {
                wordDisplay[i] = "_";
            }
        }

        private void GetWordFromPlayer()
        {
            Console.WriteLine("Player 1, enter word: ");
            answer = Console.ReadLine().ToUpper();
            Console.Clear();
        }
    }
}
