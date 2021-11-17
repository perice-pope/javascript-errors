// Besides the generic Error constructor, there are other core error constructors in JavaScript. For client-side exceptions, see Exception handling statements.

// EvalError  Creates an instance representing an error that occurs regarding the global function eval().
try {
    throw new EvalError('Hello', 'someFile.js', 10);
  } catch (e) {
    console.log(e instanceof EvalError);
    console.log(e.message);                
  }
  
// RangeError  Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
function check(n)
{
    if( !(n >= -500 && n <= 500) )
    {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try
{
    check(2000)
}
catch(error)
{
    if (error instanceof RangeError)
    {
        // Handle the error
    }
}

// ReferenceError  --> Creates an instance representing an error that occurs when de-referencing an invalid reference.
try {
    throw new ReferenceError('Hello', 'someFile.js', 10)
  } catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)                    // "Hello"
    console.log(e.name)                       // "ReferenceError"
    console.log(e.fileName)                   // "someFile.js"
    console.log(e.lineNumber)                 // 10
    console.log(e.columnNumber)               // 0
    console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
  }

// SyntaxError --> Creates an instance representing a syntax error.
try {
    throw new SyntaxError('Hello', 'someFile.js', 10);
  } catch (e) {
    console.error(e instanceof SyntaxError); // true
    console.error(e.message);                // Hello
    console.error(e.name);                   // SyntaxError
    console.error(e.fileName);               // someFile.js
    console.error(e.lineNumber);             // 10
    console.error(e.columnNumber);           // 0
    console.error(e.stack);                  // @debugger eval code:3:9
  }

// TypeErrorCreates an instance representing an error that occurs when a variable or parameter is not of a valid type.
try {
    throw new TypeError('Hello', "someFile.js", 10)
  } catch (e) {
    console.log(e instanceof TypeError)  // true
    console.log(e.message)               // "Hello"
    console.log(e.name)                  // "TypeError"
    console.log(e.fileName)              // "someFile.js"
    console.log(e.lineNumber)            // 10
    console.log(e.columnNumber)          // 0
    console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
  }

// URIErrorCreates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
try {
    throw new URIError('Hello', 'someFile.js', 10)
  } catch (e) {
    console.log(e instanceof URIError)  // true
    console.log(e.message)              // "Hello"
    console.log(e.name)                 // "URIError"
    console.log(e.fileName)             // "someFile.js"
    console.log(e.lineNumber)           // 10
    console.log(e.columnNumber)         // 0
    console.log(e.stack)                // "@Scratchpad/2:2:9\n"
  }
// AggregateError --> Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by Promise.any().
try {
    throw new AggregateError([
      new Error("some error"),
    ], 'Hello');
  } catch (e) {
    console.log(e instanceof AggregateError); // true
    console.log(e.message);                   // "Hello"
    console.log(e.name);                      // "AggregateError"
    console.log(e.errors);                    // [ Error: "some error" ]
  }

// InternalError Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
// this only works in firefox 

// Constructor
// Error()  --> Creates a new Error object.
try {
    throw new Error('Whoops!')
  } catch (e) {
    console.error(e.name + ': ' + e.message)
  }
