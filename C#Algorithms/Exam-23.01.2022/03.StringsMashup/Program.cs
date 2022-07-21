using System;
using System.Collections.Generic;

namespace _03.StringsMashup
{    
    class Program
    {
        private static string str;
        private static List<char> variations;

        static void Main()
        {
            str = Console.ReadLine();
            variations = new List<char>(str);

            Variations(0);
        }

        private static void Variations(int permutationIdx)
        {
            if (permutationIdx >= variations.Count)
            {
                Console.WriteLine(String.Join("", variations));

                return;
            }

            Variations(permutationIdx + 1);

            if (char.IsLetter(variations[permutationIdx]))
            {
                variations[permutationIdx] = Swap(variations, permutationIdx);

                Variations(permutationIdx + 1);

                variations[permutationIdx] = Swap(variations, permutationIdx);
            }
        }

        private static char Swap(List<char> elements, int index)
        {
            return char.IsLower(elements[index]) ? char.ToUpper(elements[index]) : char.ToLower(elements[index]);
        }
    }
}