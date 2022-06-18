using System;

namespace VariationsWithoutRepetition
{
    internal class Program
    {
        private static int k;
        private static string[] elements;
        private static string[] variations;
        private static bool[] used;

        static void Main()
        {
            elements = Console.ReadLine().Split();
            k = int.Parse(Console.ReadLine());

            variations = new string[k];
            used = new bool[elements.Length];

            Variations(0);
        }

        static void Variations(int idx)
        {
            if (idx >= variations.Length)
            {
                Console.WriteLine(String.Join(" ", variations));
                return;
            }

            for (int i = 0; i < elements.Length; i++)
            {
                variations[idx] = elements[i];
                Variations(idx + 1);
            }
        }
    }
}
