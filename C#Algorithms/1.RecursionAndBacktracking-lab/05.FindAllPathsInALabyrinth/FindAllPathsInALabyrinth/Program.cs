using System;
using System.Collections.Generic;

namespace FindAllPathsInALabyrinth
{
    internal class Program
    {
        static void Main()
        {
            var rows = int.Parse(Console.ReadLine());
            var cols = int.Parse(Console.ReadLine());

            var labyrinth = new char[rows, cols];

            for (int row = 0; row < rows; row++)
            {
                var colElement = Console.ReadLine();

                for (int col = 0; col < colElement.Length; col++)
                {
                    labyrinth[row, col] = colElement[col];
                }
            }

            FindPaths(labyrinth, 0, 0, new List<string>(), "");
        }

        private static void FindPaths(char[,] labyrinth, int row, int col, List<string> directions, string direction)
        {
            // validates row and col
            if (row < 0 || row >= labyrinth.GetLength(0) || col < 0 || col >= labyrinth.GetLength(1))
            {
                return;
            }

            // check for walls or already visited cells
            if (labyrinth[row, col] == '*' || labyrinth[row, col] == 'v')
            {
                return;
            }

            directions.Add(direction);

            // check for End
            if (labyrinth[row, col] == 'e')
            {
                Console.WriteLine(string.Join("", directions));
                directions.RemoveAt(directions.Count - 1);

                return;
            }

            labyrinth[row, col] = 'v';            

            FindPaths(labyrinth, row - 1, col, directions, "U"); // Up
            FindPaths(labyrinth, row + 1, col, directions, "D"); // Down
            FindPaths(labyrinth, row, col - 1, directions, "L"); // Left
            FindPaths(labyrinth, row, col + 1, directions, "R"); // Right

            labyrinth[row, col] = '-';
            directions.RemoveAt(directions.Count - 1);
        }
    }
}
