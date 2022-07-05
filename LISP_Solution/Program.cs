using System.Collections;
using System.Collections.Generic;

namespace LISP_Solution
{
    public class Program
    {
        public bool IsValid(string s)
        {
            var valid = true;
            var pairDict = new Dictionary<char, char>();
            pairDict['('] = ')';
            pairDict['['] = ']';
            pairDict['{'] = '}';

            var charAry = s.ToCharArray();
            var charStack = new Stack();
            if (charAry.Length % 2 != 0 || charAry.Length == 0)
                return false;

            foreach (char c in charAry)
            {
                if (GetValueForParenthesis(c) > 0)
                    charStack.Push(c);
                else
                {
                    if (charStack.Count == 0)
                    {
                        valid = false;
                        break;
                    }

                    if (c != (char)pairDict[(char)charStack.Peek()])
                    {
                        valid = false;
                        break;
                    }
                    else
                    {
                        charStack.Pop();
                    }
                }
            }

            if (charStack.Count != 0)
                valid = false;

            return valid;
        }

        private int GetValueForParenthesis(char p)
        {
            if (p == '(' || p == '{' || p == '[')
                return 1;
            else if (p == ')' || p == ']' || p == ']')
                return -1;
            else return 0;
        }
    }
}

