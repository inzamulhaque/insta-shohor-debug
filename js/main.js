const data = {
    jsWork: {
        question: "How does JavaScript work?",
        answer: `JavaScript is interpreted programming language. কম্পিউটার সরাসরি JavaScript code বুঝে না। কম্পিউটার কে JavaScript code বোঝাতে js code টা কে machine language (binary 0,1) তে convert করতে হয়। JavaScript interpreted language হওয়াতে line by line convert করে। Browser JavaScript code কে machine code এ convert করার জন্য JavaScript engine use করে। অন্যতম কিছু JavaScript engine হলোঃ 
        <table class="table table-striped table-hover">
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
        answer: ``
    },
};