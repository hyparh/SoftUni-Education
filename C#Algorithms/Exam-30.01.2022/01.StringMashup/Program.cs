using System;

namespace PermutationsWithoutRepetition
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    namespace VariationsWithoutRepetition
    {
        internal class Program
        {
            private static int k;
            private static string input;
            private static string tempStr;
            private static char[] charArr;
            private static char[] combinations;
            private static List<string> result;

            static void Main()
            {
                result = new List<string>();

                input = Console.ReadLine();
                charArr = input.ToCharArray();

                k = int.Parse(Console.ReadLine());

                combinations = new char[k];

                Combinations(0, 0);

                result.Sort();

                foreach (var item in result)
                {
                    Console.WriteLine(item);
                }
            }

            static void Combinations(int idx, int elementsStartIdx)
            {
                if (idx >= combinations.Length)
                {
                    var rdyCombs = combinations
                        .OrderBy(x => x)
                        .ToArray();

                    tempStr = new string(rdyCombs);
                    result.Add(tempStr);

                    return;
                }

                for (int i = elementsStartIdx; i < charArr.Length; i++)
                {
                    var res = combinations.ToString();

                    combinations[idx] = charArr[i];
                    Combinations(idx + 1, i);
                }
            }
        }
    }
}