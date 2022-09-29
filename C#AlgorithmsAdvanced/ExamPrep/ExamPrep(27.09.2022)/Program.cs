using System;
using System.Collections.Generic;
using System.Linq;

namespace ExamPrep_27._09._2022_
{
    public class Program
    { 
        static void Main()
        {
            var soldiers = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            var lis = FindLis(soldiers)
                .Reverse()
                .ToArray();

            var reversedSoldiers = soldiers
                .Reverse()
                .ToArray();

            var lds = FindLis(reversedSoldiers);

            if (lis.Length > lds.Count)
            {
                Console.WriteLine(String.Join(" ", lis));

                return;
            }

            Console.WriteLine(String.Join(" ", lds));
        }

        private static ICollection<int> FindLis(int[] soldiers)
        {
            var prevSoldierIndex = new int[soldiers.Length];
            var soldierLength = new int[soldiers.Length];

            var bestLength = 0;
            var startingIdx = 0;

            for (int currSoldierIdx = 0; currSoldierIdx < soldiers.Length; currSoldierIdx++)
            {
                var currentSoldier = soldiers[currSoldierIdx];
                var currentSoldierLength = 1;
                var currentParent = -1;

                for (int prevSoldierIdx = currSoldierIdx - 1; prevSoldierIdx >= 0; prevSoldierIdx--)
                {
                    var prevSoldier = soldiers[prevSoldierIdx];
                    var prevSoldierLength = soldierLength[prevSoldierIdx];

                    if (prevSoldier < currentSoldier && currentSoldierLength <= prevSoldierLength + 1)
                    {
                        currentSoldierLength = prevSoldierLength + 1;
                        currentParent = prevSoldierIdx;
                    }
                }

                prevSoldierIndex[currSoldierIdx] = currentParent;
                soldierLength[currSoldierIdx] = currentSoldierLength;

                if (currentSoldierLength > bestLength)
                {
                    bestLength = currentSoldierLength;
                    startingIdx = currSoldierIdx;
                }
            }

            return ReconstructLis(startingIdx, soldiers, prevSoldierIndex);
        }

        private static ICollection<int> ReconstructLis(int startingIdx, int[] soldiers, int[] prevSoldierIndex)
        {
            var lis = new List<int>();

            while (startingIdx != -1)
            {
                lis.Add(soldiers[startingIdx]);
                startingIdx = prevSoldierIndex[startingIdx];
            }

            return lis;
        }
    }
}
