import logo from './logo.svg';
import './App.css';
import AHelloWorld from './Components/AHelloWorld';
import BHelloName from './Components/BHelloName';
import CMessageOfTheDay from './Components/CMessageOfTheDay';
import DBasicState from './Components/DBasicState';
import ETwoMessages from './Components/ETwoMessages';
import FWillsAwesomeCounter from './Components/FWillsAwesomeCounter';
import GColorSwitcher from './Components/GColorSwitcher';
import HTwoMessagesPartTwo from './Components/HTwoMessagesPartTwo';
import IGithubFetcher from './Components/IGitHubFetcher';
import JCatPic from './Components/JCatPic';
import KTypicodeFetcher from './Components/KTypicodeFetcher';

function App() {
  return (
    <>
      <AHelloWorld />
      <BHelloName name = "Will"/>
      <CMessageOfTheDay />
      <DBasicState />
      <ETwoMessages message1="Hello World" message2="Goodbye World"/>
      <FWillsAwesomeCounter />
      <GColorSwitcher />
      <HTwoMessagesPartTwo />
      <IGithubFetcher testName="thousandemon"/>
      <JCatPic />
      <KTypicodeFetcher />
    </>
  );
}

export default App;
