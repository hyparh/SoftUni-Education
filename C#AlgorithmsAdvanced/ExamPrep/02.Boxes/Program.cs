using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.Boxes
{
    class Box 
    {
        public Box(string box)
        {
            var args = box
                .Split()
                .Select(int.Parse)
                .ToArray();

            Width = args[0];
            Depth = args[1];
            Height = args[2];
        }

        public int Width { get; set; }

        public int Depth { get; set; }

        public int Height { get; set; }

        public override string ToString()
        {
            return $"{Width} {Depth} {Height}";
        }

        public bool IsBigger(Box other) 
        {
            return Width > other.Width && Depth > other.Depth && Height > other.Height;
        }
    }

    public class Program
    {
        static void Main()
        {
            var numberOfBoxes = int.Parse(Console.ReadLine());
            var boxes = new List<Box>();

            for (int i = 0; i < numberOfBoxes; i++)
            {
                boxes.Add(new Box(Console.ReadLine()));
            }

            var lis = FindLis(boxes);

            foreach (var box in lis)
            {
                Console.WriteLine(box);
            }
        }

        private static IEnumerable<Box> FindLis(List<Box> boxes)
        {
            var prevIndex = new int[boxes.Count];
            var length = new int[boxes.Count];

            var bestLength = 0;
            var startingIdx = 0;

            for (int currIndex = 0; currIndex < boxes.Count; currIndex++)
            {
                var currentBox = boxes[currIndex];
                var currentBoxLength = 1;
                var currentParent = -1;

                for (int prevBoxIdx = currIndex - 1; prevBoxIdx >= 0; prevBoxIdx--)
                {
                    var prevBox = boxes[prevBoxIdx];
                    var prevBoxLength = length[prevBoxIdx];

                    if (currentBox.IsBigger(prevBox) && currentBoxLength <= prevBoxLength + 1)
                    {
                        currentBoxLength = prevBoxLength + 1;
                        currentParent = prevBoxIdx;
                    }
                }

                prevIndex[currIndex] = currentParent;
                length[currIndex] = currentBoxLength;

                if (currentBoxLength > bestLength)
                {
                    bestLength = currentBoxLength;
                    startingIdx = currIndex;
                }
            }

            return ReconstructLis(startingIdx, boxes, prevIndex);
        }

        private static IEnumerable<Box> ReconstructLis(int startingIdx, List<Box> boxes, int[] prevIndex)
        {
            var lis = new Stack<Box>();

            while (startingIdx != -1)
            {
                lis.Push(boxes[startingIdx]);
                startingIdx = prevIndex[startingIdx];
            }

            return lis;
        }
    }
}
