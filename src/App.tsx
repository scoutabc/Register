import { useState } from "react";
import MessagePage from "./MessagePage";
import TopicPage from "./TopicPage";
import SummaryPage from "./SummaryPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [topics,setTopics] = useState<string[]>([]);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MessagePage setName={setName} setEmail={setEmail} />} />
        <Route path="/topics" element={<TopicPage topics={topics} setTopics={setTopics} />}/>
        <Route path="/summary" element={<SummaryPage name={name} email={email} topics={topics} />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
