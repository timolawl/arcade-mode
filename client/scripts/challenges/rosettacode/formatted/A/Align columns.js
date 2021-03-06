/* eslint spaced-comment: 0 */
/* eslint no-redeclare: 0 */
/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */

const assert = require('chai').assert;

/// title: Align columns
/// type: rosetta-code

/// categories:
/// closures

/// difficulty: 3

/// description:
/// <div class="rosetta">
/// <p class="rosetta__paragraph">Given a text file of many lines, where fields within a line are delineated by a single <code>$</code> character, write a program that aligns each column of fields by ensuring that words in each column are separated by at least one space. Further, allow for each word in a column to be either left justified, right justified, or center justified within its column.</p><br/>
/// <p class="rosetta__paragraph">Use the following text to test your programs:</p>
/// <div class="rosetta__pre-wrap">
/// <pre class="rosetta__pre">
/// Given$a$text$file$of$many$lines
/// where$fields$within$a$line$
/// are$delineated$by$a$single$'dollar'$character
/// write$a$program
/// that$aligns$each$column$of$fields
/// by$ensuring$that$words$in$each$
/// column$are$separated$by$at$least$one$space.
/// Further,$allow$for$each$word$in$a$column$to$be$either$left$
/// justified,$right$justified
/// or$center$justified$within$its$column.
/// </pre>
/// </div>
/// <p class="rosetta__paragraph">Note that:</p>
/// <ol class="rosetta__ordered-list">
/// <li class="rosetta__list-item--ordered">The example input texts lines may, or may not, have trailing dollar characters.</li>
/// <li class="rosetta__list-item--ordered">All columns should share the same alignment.</li>
/// <li class="rosetta__list-item--ordered">Consecutive space characters produced adjacent to the end of lines are insignificant for the purposes of the task.</li>
/// <li class="rosetta__list-item--ordered">Output text will be viewed in a mono-spaced font on a plain text editor or basic terminal.</li>
/// <li class="rosetta__list-item--ordered">The minimum space between columns should be computed from the text and not hard-coded.</li>
/// <li class="rosetta__list-item--ordered">It is not a requirement to add separating characters between or around columns.</li>
/// </ol>
/// </div>

/// challengeSeed:
const testArr = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

function formatText (input, justification) {
  // Good luck!
}

/// solutions:
const testArr = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

String.prototype.repeat = function (n) { return new Array(1 + parseInt(n)).join(this); };

function formatText (input, justification) {
  let x, y, max, cols = 0, diff, left, right;
  for (x = 0; x < input.length; x++) {
    input[x] = input[x].split('$');
    if (input[x].length > cols) {
      cols = input[x].length;
    }
  }
  for (x = 0; x < cols; x++) {
    max = 0;
    for (y = 0; y < input.length; y++) {
      if (input[y][x] && max < input[y][x].length) {
        max = input[y][x].length;
      }
    }
    for (y = 0; y < input.length; y++) {
      if (input[y][x]) {
        diff = (max - input[y][x].length) / 2;
        left = ' '.repeat(Math.floor(diff));
        right = ' '.repeat(Math.ceil(diff));
        if (justification === 'left') {
          right += left; left = '';
        }
        if (justification === 'right') {
          left += right; right = '';
        }
        input[y][x] = left + input[y][x] + right;
      }
    }
  }
  for (x = 0; x < input.length; x++) {
    input[x] = input[x].join(' ');
  }
  input = input.join('\n');
  return input;
}

/// tail:
const testInput = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

const rightAligned = `     Given          a      text   file     of     many     lines
     where     fields    within      a   line 
       are delineated        by      a single "dollar" character
     write          a   program
      that     aligns      each column     of   fields 
        by   ensuring      that  words     in     each 
    column        are separated     by     at    least       one space.
  Further,      allow       for   each   word       in         a column to be either left 
justified,      right justified
        or     center justified within    its  column.`;

const leftAligned = `Given      a          text      file   of     many     lines    
where      fields     within    a      line   
are        delineated by        a      single "dollar" character
write      a          program  
that       aligns     each      column of     fields   
by         ensuring   that      words  in     each     
column     are        separated by     at     least    one       space.
Further,   allow      for       each   word   in       a         column to be either left 
justified, right      justified
or         center     justified within its    column. `;

const centerAligned = `  Given        a        text     file    of     many     lines  
  where      fields    within     a     line  
   are     delineated    by       a    single "dollar" character
  write        a       program 
   that      aligns     each    column   of    fields  
    by      ensuring    that    words    in     each   
  column      are     separated   by     at    least      one    space.
 Further,    allow       for     each   word     in        a     column to be either left 
justified,   right    justified
    or       center   justified within  its   column. `;

/// tests:
assert(typeof formatText === 'function', 'message: <code>formatText</code> is a function.');
assert.strictEqual(formatText(testInput, 'right'), rightAligned, 'message: <code>formatText</code> with the above input and "right" justification should produce the following: ');
assert.strictEqual(formatText(testInput, 'left'), leftAligned, 'message: <code>formatText</code> with the above input and "left" justification should produce the following: ');
assert.strictEqual(formatText(testInput, 'center'), centerAligned, 'message: <code>formatText</code> with the above input and "center" justification should produce the following: ');
/// id: 594810f028c0303b75339ad0
