# Greenstone

A simple NES emulator written to be cross-platform and headless with a focus on testing and debugging.

A headless NES emulator? Yeah, IDK. Maybe I'm not that smart. Maybe I _am_ living up to my potential. :weary:

At a high level, my general approach will be based on an exploratory implementation. I'll write tests and develop using a TDD red-green-refactor approach. My first bits of code will involve reading the header that prefixes most (all?) NES ROMs and validating ROMs.

I'm not terribly concerned about performance; rather, I'll be focusing on readability and maintainability and verifiability of the code and its functionality. I'm less concerned about frames per second than I am with strict correctness of the emulation. That's obviously not trivial, and it's not my general approach, so this project definitely might crash and burn.
