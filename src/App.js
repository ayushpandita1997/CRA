import React,{Suspense,lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Nav from './FuncComponents/Router/Nav';
import Fn from './Components/FuncComponent';
import Fun from './Components/ClassComponent';
import State from './Components/state';
import Counter from './Components/counter';
import Event from './Components/Event';
import EventBind from './Components/EventBind';
import CondRendering from './Components/CondRendering';
import List from './Components/List';
import StyleSheet from './Components/StyleSheet';
import Form from './Components/Form';
import Mounting from './Components/MountingLifecycle';
import UpdatingLifecycle from './Components/UpdatingLifecycle';
import Fragment1 from './Components/Fragment1';
import Refs from './Components/Refs';
import ForwardRefParents from './Components/ForwardRefs/ForwardRefParents';
import Portals from './Components/Portals';
import ErrorHandlingLifecycle from './Components/ErrorBoundary/ErrorHandlingLifecycle';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import OnClickCounter from './Components/HigherOrderFunction/OnClickCounter';
import OnHoverCounter from './Components/HigherOrderFunction/OnHoverCounter';
import OnClickCounter1 from './Components/RenderProps/OnClickCounter1';
import OnHoverCounter1 from './Components/RenderProps/OnHoverCounter1';
import User from './Components/RenderProps/User';
import RenderPropsCounter from './Components/RenderProps/RenderPropsCounter';
// import ComponentC from './Components/Context/ComponentC';
import {UserProvider} from './Components/Context/userContext';
import GetRequest from './Components/HTTPRequests/GetRequest';
import PostRequest from './Components/HTTPRequests/PostRequest';

import FuncCounter from './FuncComponents/FuncCounter';
import TargetText from './FuncComponents/TargetText';
import TargetArray from './FuncComponents/TargetArray';
import UseEffect from './FuncComponents/useEffect';
import HookMouse from './FuncComponents/HookMouse';
import CleanUp from './FuncComponents/CleanUp';
import AutoCounter from './FuncComponents/AutoCounter';
import FetchUseEffect from './FuncComponents/FetchUseEffect';
import FetchUseEffectInputValue from './FuncComponents/FetchUseEffectInputValue';
// import ComponentC from './FuncComponents/Context/ComponentC';
import {UseProvider} from './FuncComponents/Context/UseContext';
import {ChannelProvider} from './FuncComponents/Context/UseContext';
// import Counter1 from './FuncComponents/Reducer/Counter1';
// import Counter2 from './FuncComponents/Reducer/Counter2';
// import Counter3 from './FuncComponents/Reducer/Counter3';
// import MainComponent from './FuncComponents/UseReducerWithUseContext/MainComponent';
// import DataFetching1 from './FuncComponents/FetchWithUseReducer/DataFetching1';
// import DataFetching2 from './FuncComponents/FetchWithUseReducer/DataFetching2';
// import UseMemo from './FuncComponents/UseMemo';
// import FocusInput from './FuncComponents/UseRefs/FocusInput';
// import HookTimer from './FuncComponents/UseRefs/HookTimer';
// import Hook1 from './FuncComponents/CustomHooks/Hook1';
// import Hook2 from './FuncComponents/CustomHooks/Hook2';
// import Counter1 from './FuncComponents/CustomHooks/Counter1';
// import Counter2 from './FuncComponents/CustomHooks/Counter2';
// import FormHook1 from './FuncComponents/CustomHooks/FormHook1';
import File from './Test';


// import Nav from './FuncComponents/Router/Nav';
import AboutUs from './FuncComponents/Router/AboutUs';
import ContactUs from './FuncComponents/Router/ContactUs';
import Error from './FuncComponents/Router/Error';
import Name from './FuncComponents/Router/Name';
import RCounter from './Redux/RCounter';


const Test = lazy(()=>import('./FuncComponents/Router/Test'));

const App = () => {
  return (
    <div className="App">
      {/* <Fn name="Mr. Ayush" />
      <Fn > <button>Add</button></Fn>
      <Fun name="for begineers" /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <Event /> */}
      {/* <EventBind /> */}
      {/* <CondRendering /> */}
      {/* <List /> */}
      {/* <StyleSheet /> */}
      {/* <Form /> */}
      {/* <Mounting /> */}
      {/* <UpdatingLifecycle /> */}
      {/* <Fragment1 /> */}
      {/* <Refs /> */}
      {/* <ForwardRefParents /> */}
      {/* <Portals /> */}

      {/* <ErrorBoundary>
      <ErrorHandlingLifecycle heroName="AYUSH"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorHandlingLifecycle heroName="ANU"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorHandlingLifecycle heroName="KRISHNA"/>
      </ErrorBoundary> */}
      
      {/* <OnClickCounter />
      <OnHoverCounter /> */}

      {/* <OnClickCounter1 />
      <OnHoverCounter1 />
      <User render={(isLoggedIn)=>isLoggedIn ? "Ayush" : "Guest"} /> */}

      {/* <RenderPropsCounter> 
        {(count,counter)=> (<OnClickCounter1 count={count} counter={counter} />
      )} 
      </RenderPropsCounter>
      
      <RenderPropsCounter>
         {(count,counter)=> (<OnHoverCounter1 count={count} counter={counter} />
      )} 
      </RenderPropsCounter> */}

      {/* <UserProvider value="Ayush">
      <ComponentC />
      </UserProvider> */}

      {/* <GetRequest /> */}
      {/* <PostRequest /> */}


{/* ========================================================================================================= */}
     

      {/* <FuncCounter /> */}
      {/* <TargetText /> */}
     {/* <TargetArray /> */}
     {/* <UseEffect /> */}
     {/* <HookMouse /> */}
     {/* <CleanUp /> */}
     {/* <AutoCounter /> */}
     {/* <FetchUseEffect /> */}
     {/* <FetchUseEffectInputValue /> */}

     {/* <UseProvider value={"Ayush"}>
     <ChannelProvider value={"Pandita"}>
     <ComponentC />
     </ChannelProvider>
     </UseProvider> */}
     {/* <Counter1 /> */}
     {/* <Counter3 /> */}
     {/* <MainComponent /> */}
     {/* <DataFetching1 /> */}
     {/* <DataFetching2 /> */}
     {/* <UseMemo /> */}
     {/* <FocusInput /> */}
     {/* <HookTimer /> */}
     {/* <Hook1 />
     <Hook2 /> */}
     {/* <Counter1 />
     <Counter2 /> */}
     {/* <FormHook1 /> */}
     
{/* 
<Suspense fallback={<h1>page is loading...</h1>}>
<Test />
</Suspense>

<Nav />
<Switch>
<Route exact path='/' component={Name} />
<Route exact path='/about' component={AboutUs} />
<Route exact path='/contact' component={ContactUs} />
<Route component={Error} />
</Switch>

<RCounter /> */}
<File />
    </div>
  );
}   

export default App;




