using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.DividingPresents
{
    internal class Program
    {
        static void Main()
        {
            var presents = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            var allSums = FindAllSums(presents);

            var totalSum = presents.Sum();
            var alanSum = totalSum / 2;
            var bobSum = totalSum - alanSum;

            while (true)
            {
                if (allSums.ContainsKey(alanSum))
                {
                    var alanPresents = FindAlanSubset(allSums, alanSum)
                        .OrderBy(x => x);

                    var bobPresents = presents
                        .Except(alanPresents)
                        .OrderBy(x => x)
                        .ToArray();

                    Console.WriteLine($"{String.Join(" ", alanPresents)}");
                    Console.WriteLine($"{String.Join(" ", bobPresents)}");

                    break;
                }

                alanSum -= 1;
            }
        }

        private static List<int> FindAlanSubset(Dictionary<int, int> sums, int target)
        {
            var subsetAlan = new List<int>();

            while (target != 0)
            {
                var element = sums[target];
                subsetAlan.Add(element);

                target -= element;
            }

            return subsetAlan;
        }

        private static Dictionary<int, int> FindAllSums(int[] elements)
        {
            var sums = new Dictionary<int, int>() { { 0, 0 } };

            foreach (var element in elements)
            {
                var currentSums = sums.Keys.ToArray();

                foreach (var sum in currentSums)
                {
                    var newSum = sum + element;

                    if (sums.ContainsKey(newSum))
                    {
                        continue;
                    }

                    sums.Add(newSum, element);
                }
            }

            return sums;
        }
    }
}