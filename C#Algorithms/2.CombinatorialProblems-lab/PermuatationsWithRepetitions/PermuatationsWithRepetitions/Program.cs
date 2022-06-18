﻿using System;
using System.Collections.Generic;

namespace PermuatationsWithRepetitions
{
    public class Program
    {
        private static string[] elements;

        public static void Main()
        {
            elements = Console.ReadLine().Split();

            Permute(0);
        }

        static void Permute(int index)
        {
            if (index >= elements.Length)
                Console.WriteLine(String.Join(" ", elements));
            else
            {
                Permute(index + 1);

                var swapped = new HashSet<string> { elements[index] };

                for (int i = index + 1; i < elements.Length; i++)
                {
                    if (!swapped.Contains(elements[i]))
                    {
                        Swap(index, i);
                        Permute(index + 1);
                        Swap(index, i);
                        swapped.Add(elements[i]);
                    }
                }
            }
        }

        private static void Swap(int first, int second)
        {
            var temp = elements[first];
            elements[first] = elements[second];
            elements[second] = temp;
        }
    }
}
