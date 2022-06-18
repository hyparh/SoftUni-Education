using System;

namespace VariationsWithoutRepetition
{
    internal class Program
    {
        private static int k;
        private static string[] elements;
        private static string[] combinations;

        static void Main()
        {
            elements = Console.ReadLine().Split();
            k = int.Parse(Console.ReadLine());

            combinations = new string[k];

            Combinations(0, 0);
        }

        static void Combinations(int idx, int elementsStartIdx)
        {
            if (idx >= combinations.Length)
            {
                Console.WriteLine(String.Join(" ", combinations));
                return;
            }

            for (int i = elementsStartIdx; i < elements.Length; i++)
            {
                combinations[idx] = elements[i];
                Combinations(idx + 1, i + 1);
            }
        }
    }
}