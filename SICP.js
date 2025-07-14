function d_filter(pred, xs) {
// ???  
      if (is_null(xs)){
         return null;
      } else {
          const wish = d_filter(pred,tail(xs));
          set_tail(xs, wish);
          return pred(head(xs))
                 ? xs
                 : tail(xs);


const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
L; // What is L now?