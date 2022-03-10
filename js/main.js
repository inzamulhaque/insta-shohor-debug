const data = {
    jsWork: {
        question: "How does JavaScript work?",
        answer: `JavaScript is interpreted programming language. কম্পিউটার সরাসরি JavaScript code বুঝে না। কম্পিউটার কে JavaScript code বোঝাতে js code টা কে machine language (binary 0,1) তে convert করতে হয়। JavaScript interpreted language হওয়াতে line by line convert করে। Browser JavaScript code কে machine code এ convert করার জন্য JavaScript engine use করে। অন্যতম কিছু JavaScript engine হলোঃ 
        <table class="table table-striped table-hover  text-center">
            <thead>
                <tr>
                    <th scope="col">Browser</th>
                    <th scope="col">Engine</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chrome</td>
                    <td>V8</td>
                </tr>
                <tr>
                    <td>Mozilla Firefox</td>
                    <td>SpiderMonkey</td>
                </tr>
                <tr>
                    <td>Safari</td>
                    <td>javascriptCore</td>
                </tr>
                <tr>
                    <td>Internet Explorar</td>
                    <td>Chakra</td>
                </tr>
                <tr>
                    <td>Opera</td>
                    <td>Carakan</td>
                </tr>
            </tbody>
        </table>
        এছাড়া JavaScript কে server side এ Run করানোর জন্য V8 engine and C++ মিলিয়ে nodeJS নামে JavaScript runtime environment তৈরি করা হয়েছে। Line by line code execuition অনেক বেশি সময় নেওয়াতে এখন JavaScript just time (JIT) Compiler use করা হয়। যেমন V8 Engine TurboFan নামের JIT Use করে।
        `
    },
    eventLoop: {
        question: "What does JavaScript event loop do?",
        answer: `JavaScript একটি single threaded programming language. সেজন্য JavaScript একই সময়ে একটি মাত্র কাজ করতে পারে। JavaScript single treaded language হলেও এটি Synchronous and Asynchronous দুই ভাবে ই কাজ করে। JavaScript তার কোড গুলো stack হিসাবে রাখে এবং JavaScript যেহেতু single treaaded তাই সে একটি করে কাজ করে। Call Stack LIFO way তে কাজ করে। কিন্তু JavaScript যদি কোনো Asynchronous code পাই তাহলে সেটি জমা করে বসে না থেকে Web API/C++ API(for nodeJS) তে পাঠিয়ে দেই এবং পরের কাজটি করে। Web/C++ API তার কাজ সম্পূর্ণ করে সেই কোড গুলোকে Queue তে পাঠিয়ে দেই। JavaScript এ বেশ কিছু Queue আছে। Queue FIFO way তে কাজ করে। কিন্তু JavaScript এর কোড গুলো call stack এ execute হয়। তাই stack এর চলমান কাজ শেষ হলে Queue থেকে একটি একটি করে সব কিছু stack এ পাঠানো হয়। এই পাঠানোর কাজটি Event Loop দিয়ে করা হয়।`
    },
    localVsSession: {
        question: "What is difference between local storage and session storage?",
        answer: `
        <table class="table table-striped table-hover text-center">
            <thead>
                <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Local Storage</th>
                    <th scope="col">Session Storage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Capacity</td>
                    <td>5MB/10MB</td>
                    <td>5MB</td>
                </tr>
                <tr>
                    <td>Deleted</td>
                    <td>এটি automatic delete হয় না। এটিকে delete করতে হয়।</td>
                    <td>এটি browser বা tab টি close করে দিলে automatic delete হয়ে যায়।</td>
                </tr>
                <tr>
                    <td>Security</td>
                    <td>এটি সাধারণ website এ ব্যবহৃত হয়। এটির security কম।</td>
                    <td>বিশেষ করে আর্থিক কাজের সাথে জড়িত এমন website session storage use করে। এটির security তুলনামূলক বেশি।
                    </td>
                </tr>
            </tbody>
        </table>
        `
    }
};

const getAnswer = qId => {
    const modalHeader = document.getElementById("exampleModalLabel");
    const modalBody = document.getElementById("modalBody");
    modalHeader.textContent = "";
    modalBody.textContent = "";
    modalHeader.innerText = data[qId].question;
    modalBody.innerHTML = data[qId].answer;
}