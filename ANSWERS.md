- [
    I wouldn't. However before the useState and useEffect hooks class components were the only React destructure the were allowed to can stateful data, functional components required that data to be pass into them from a class component HOC in order for it to be utilized inside them.
 ] Why would you use class component over function components (removing hooks from the question)?
- [
ComponentDidMount - to perform changes to state and sideeffects after a     component has loaded for the first time. 
CompontWillMount - to perform changes to state and sideeffects before a     component has loaded for the first time. (for instance API calls that    need to be made only once.)
ComponentWillUnmount - to perform changes to state and sideeffects right    before a component unmounts often used to clean up unneeded data] Name three lifecycle methods and their purposes.
- [ The purpose of custom hooks is to reuse parts of code in stateful operations that are similar among different stateful data.] What is the purpose of a custom hook?
- [ Do insure the fidelity, and efficiency of the application amongst many different forms of input ] Why is it important to test our apps?