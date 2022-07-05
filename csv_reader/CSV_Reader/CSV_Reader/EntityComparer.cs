using System;
using System.Collections;

namespace CSV_Reader
{
    public class EntityComparer : IComparer
    {
        public int Compare(object x, object y)
        {
            return (new CaseInsensitiveComparer()).Compare(((Entity)x).Name, ((Entity)y).Name);
        }
    }
}
