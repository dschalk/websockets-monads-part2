# Websockets Monads Part2
 
This is the third page in the `Javascript Monads` series. `Fun With Monads`and `Websockets Monads` preceeded it. 

The `bnd` method changed after the second page. Its argument function no longer takes the calling monad's value as a parameter, just the monad itself. So m.bnd(f, ...args) -> f(m, ...args) where m is an instance of Monad or MonadIter. 

The project's running code is at [http://schalk.net](http://schalk.net). You can run the binary on port 3093 by entering `dist/build/server/server`.



