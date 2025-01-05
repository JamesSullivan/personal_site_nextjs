---
layout: post
title: "Leveraging AI for Coding"
description:  "Summary of Chatbots and IDE Integration for AI Assisted Coding"
excerpt: "You've got to know when to hold 'em and know when to fold 'em."
date: "2024-05-06T09:35:07.322Z"
categories: ML

image: /images/ai_generated_computer.png
image_alt: AI Assisted Computing
image_caption: AI Assisted Computing

author:
  name: James Sullivan
  picture: "/assets/blog/authors/js.png"
coverImage: "/assets/blog/ai-coding/ai_generated_computer3.png"
ogImage:
  url: "/assets/blog/ai-coding/ai_generated_computer3.png"
---



<div class="separator" style="clear: both; text-align: center;"><a href="../../../menu/portfolio/blog/leverage-ai-for-coding" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img height="109" src="/assets/blog/ai-coding/ai_generated_computer.png" width="320" alt="AI Assisted Computing" /></a></div>
<p>Using AI to help you be a more efficient programmer is a bit like Kenny Rogers' classic song "The Gambler": "You've got to know when to hold 'em, know when to fold 'em, know when to walk away, and know when to run." "You've got to know when to hold 'em" in the sense that most of the time the results you will get from large language models (LLMs) for code are surprisingly good, and you can use the results with little modification. You need to "know when to fold 'em" in that you will need to recognize when you need to change your prompts to get the results you want, and we discuss some strategies below. You need to "know when to walk away" in the sense that at the end of the day, these models are only combining code they have seen before and do not generalize logic well, so when the results are not getting better despite trying different prompts, you need to cut your losses and do the work manually. Finally, you need to know "when to run" and not use AI-assisted coding in the first place. If you are trying to use a language the model has not been trained on or a library built after the model's training date, it is more time-efficient not to use it at all. Moreover, if safety and security considerations are paramount and you do not already have the skill to understand when the results may be hallucinations or wrong, you shouldn't use AI-generated code.</p>

<p>WARNING: Although everything written here is up-to-date at the time of writing, models and tools are changing rapidly.</p>

<p>Currently, you can roughly divide up AI-assisted coding tools into two types of tools, Chatbots, and IDE integration. </p>

<h2>Chatbots</h2>

<p>Chatbots are used for the big picture, to explore ideas, and to set up the development of products. Although they can also be used for the details as well, modifying code is done more efficiently by using an IDE with integrated LLMs for a smoother workflow.</p>


<div class="overflow-y-auto rounded-md prefers-dark-scheme scrollbar scroll-contain shadow-xl border-border border lang-text">
<table class="relative scrollbar overflow-scroll pl-3">
  <thead>
    <tr>
      <th>Tool<a href="#footnote-1"><sup>1</sup></a></th>
      <th>Company</th>
      <th>Multimodal<a href="#footnote-2"><sup>2</sup></a></th>
      <th>Strengths</th>
      <th>Weaknesses</th>
      <th>Run code<a href="#footnote-3"><sup>3</sup></a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://openai.com/chatgpt">ChatGPT</a></td>
      <td>OpenAI</td>
      <td>Paid only</td>
      <td>Industry Standard and paid versions offer possibly strongest model with API access and <a href="https://openai.com/index/chatgpt-plugins">Plugins</a></td>
      <td>Results do not integrate search information after model date. Free version cannot reach out to internet.</td>
      <td>No</td>
    </tr>
    <tr>
      <td><a href="https://gemini.google.com">Gemini</a></td>
      <td>Google</td>
      <td>Yes</td>
      <td>Integrates Google Search so some info is up-to-date after model training date</td>
      <td></td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><a href="https://gemini.google.com">Copilot</a></td>
      <td>Microsoft</td>
      <td>Yes</td>
      <td>Integrates Bing Search so some info is up-to-date after model training date. Handy learn more feature.</td>
      <td>Cannot reach out to Internet, despite hallucination that it can.</td>
      <td>No</td>
    </tr>
    <tr>
      <td><a href="https://claude.ai">ClaudeAI</a></td>
      <td>Anthropic</td>
      <td>Upload only</td>
      <td>More tokens than free version of ChatGPT.</td>
      <td>Results do not integrate search information after model date and cannot reach out to internet.</td>
      <td>No</td>
    </tr>
    <tr>
      <td><a href="https://www.phind.com/">Phind</a></td>
      <td>PHIND</td>
      <td>Paid only</td>
      <td>Accesses current search information and has very useful source feature for code</td>
      <td></td>
      <td>Paid</td>
    </tr>
    <tr>
      <td><a href="https://chat.mistral.ai/chat">Le Chat Mistral</a></td>
      <td>MISTRAL</td>
      <td>No</td>
      <td>Mixtral open source model with emphasis on code</td>
      <td></td>
      <td>No</td>
    </tr>
  </tbody>
</table>
</div>
<ol>
    <li id="footnote-1">1. All chatbots have free and paid tiers.</li>
    <li id="footnote-2">2. Multimodal is the ability to handle images and other media types.</li>
    <li id="footnote-3">3. By run code we mean you can ask the chatbot to run code for you.</li>
</ol>


### Chatbot Prompts

<p>Before we start, keep in mind that the results from large language models (LLMs) are very brittle. The results can vary widely due to a minor change in the prompt, using a different LLM, or even an updated version of the same LLM.</p>

<p>Large language models operate by predicting the most likely next word in a sequence, generating text one word at a time. They calculate the probability of each possible word in their vocabulary and choose one based on those probabilities. Some chatbots, such as ChatGPT, have a "temperature" setting that controls the randomness of this selection process: with a low temperature (like 0), the model typically chooses the word with the highest probability, leading to more consistent but potentially repetitive outputs. A higher temperature introduces more randomness, allowing for more varied and creative responses, but at the risk of nonsensical or off-topic outcomes, known as "hallucinations." For programming, where reproducibility is valuable, a low temperature setting is recommended.</p>

<p>You should have an initial template to set the overall context, called the system message. This can be copied and pasted into the prompt (or some services allow it to be set up as Custom Instructions, so it doesn't have to be added each time you restart). Example:</p>

```
You are an experienced professional software developer that always uses up-to-date industry best practices. 
Provide correct responses to questions noting any uncertainties. 
I am aware of AI limitations so please skip explanations about your limitations. 
You should prompt me for more information and give suggestions of how to write better prompts.
```

### Prompting Strategies

<p>Keep prompts short and specific, then build on them with multiple prompts to guide the AI to what you are looking for. If necessary, label parts of the prompt, for example: Context, Input, Instruction, Restriction, Output Format.</p>

<ul>
    <li>Zero-shot prompting - no examples provided, relies entirely on the model's training.</li>
    <li>Few-shot prompting - a few examples provided or Q&A examples.</li>
    <li>Chain prompting - provide a series of intermediate reasoning steps.</li>
</ul>

<p>Finally, don't forget you can ask the chatbot to format the output as JSON, XML, table, list, markdown, HTML, MathJax, LaTeX, etc.</p>

<p>For a more detailed look try this <a href="https://www.promptingguide.ai/">Prompt Engineering Guide</a>.</p>

### Examples

#### General Examples
```
The following code is throwing a NullPointerException when calling Method(). 
Can you identify the cause and suggest a fix?
How can I make the following code run faster?
Summarize in a structured outline the important changes in the following change log of version 2.1.4: """
{Change Log}
"""
```

#### Project Example
```
Examples for a project to scrape data from Wikipedia.
What are some examples on GitHub to scrape data from a website like Wikipedia?
The following are criteria for an app to scrape data from Wikipedia:
Uses JavaScript and Puppeteer
	…
Generate a project outline
Show the project directory
Show the code for scraper.js
Create a package.json file for this project.

```


<p>Use <code>continue</code> or <code>go on</code> to get around token output limits.</p>

## IDE Integration

<p>IDEs use the context that you have provided via the comments and code in your file and offer suggestions. They allow you to work on details while staying in your dev tooling.</p>

<div class="overflow-y-auto rounded-md prefers-dark-scheme scrollbar scroll-contain shadow-xl border-border border lang-text">
<table class="relative scrollbar overflow-scroll pl-3">
  <thead>
    <tr>
      <th>Tool</th>
      <th>Free Version</th>
      <th>Integration</th>
      <th>Supported Languages</th>
      <th>Strengths</th>
      <th>Weaknesses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/features/copilot">Github Copilot</a></td>
      <td>No</td>
      <td>VS, VS Code, Neovim, JetBrains, CLI, Mobile</td>
      <td>Many, especially Python, JS, TS, Ruby, Go, C#, C++</td>
      <td style="white-space: normal;"  >Offers most functionality for a reasonable price; more than 50% of the market; bespoke LLM possible</td>
      <td>Requires paid subscription</td>
    </tr>
    <tr>
      <td><a href="https://marketplace.visualstudio.com/items?itemName%3DAmazonWebServices.amazon-q-vscode">Amazon Q</a></td>
      <td>Yes</td>
      <td>VS, VS Code, JetBrains, AWS Management Console</td>
      <td>Many, especially Java, Python, JS, TS, C#, Go, PHP, Rust, Kotlin, SQL</td>
      <td>Working with AWS Services</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://sourcegraph.com/cody">Sourcegraph Cody</a></td>
      <td>Yes</td>
      <td>VS Code, Neovim, JetBrains</td>
      <td>Many popular languages</td>
      <td>Supports Claude 3, GPT-4 Turbo, Mixtral-8x7B, Amazon Bedrock, and Azure OpenAI; code graph with <a href="https://sourcegraph.com/code-search">Code Search</a></td>
      <td>Less user-friendly interface compared to some competitors</td>
    </tr>
    <tr>
      <td><a href="https://www.tabnine.com/">Tabnine</a></td>
      <td>Yes</td>
      <td>VS, VS Code, JetBrains, Webstorm, PyCharm, AppCode, Android Studio, Eclipse, CLion, Goland, PHPStorm, RubyMine</td>
      <td>Many popular languages</td>
      <td>On-premises, on VPC, or as secure SaaS</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://codebuddy.ca/">Codebuddy</a></td>
      <td>Yes</td>
      <td>VS Code, JetBrains</td>
      <td>Many popular languages</td>
      <td>Can select files for your prompt</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://cursor.sh/">Cursor.sh</a></td>
      <td>Yes</td>
      <td>Proprietary AI-first code editor</td>
      <td>Many popular languages</td>
      <td>Good large file context support</td>
      <td>Proprietary IDE</td>
    </tr>
    <tr>
      <td><a href="https://codeium.com/">Codeium</a></td>
      <td>Yes</td>
      <td>40+</td>
      <td>70+</td>
      <td>Full repo context awareness</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://cloud.google.com/gemini/docs/codeassist/use-in-ide">Gemini Code Assist</a></td>
      <td>No after June 11th</td>
      <td>VS Code, IntelliJ, JetBrains, Google Cloud</td>
      <td>Bash, C, C++, C#, Dart, Go, GoogleSQL, Java, JavaScript, Kotlin, Lua, MatLab, PHP, Python, R, Ruby, Rust, Scala, SQL, Swift, TypeScript, YAML</td>
      <td>Includes Google Cloud-specific content like documentation and sample code</td>
      <td>Roughly twice the price of Github Pilot</td>
    </tr>
    <tr>
      <td><a href="https://pieces.app/">Pieces</a></td>
      <td>Yes</td>
      <td>VS Code, JetBrains, CLI, Sublime, browser, Teams, Obsidian, other integrations</td>
      <td>Many popular languages depending on your choice of LLM</td>
      <td>Allows choice of LLM, RAG, and tool integration</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://replit.com/">Replit</a></td>
      <td>Yes</td>
      <td>Web-based IDE</td>
      <td>Best with JS and Python, includes Bash, C, C#, C++, CSS, Go, Java, JavaScript, HTML, PHP, Perl, Python, R, Ruby, Rust, SQL</td>
      <td>Web-based IDE with code completion; good for learners and those not wanting to maintain infrastructure</td>
      <td>Primarily web-based, may not be ideal for complex projects; free version compute extremely limited</td>
    </tr>
  </tbody>
</table>
</div>


### IDE Prompts

<p>Most IDE integration is driven by code comments and code that you write, which the AI assistant then gives a suggestion or multiple suggestions for completion. The most popular AI assistants for IDEs use the [Tab] key to accept the code suggestion or the [Escape] key to skip it. Beyond that, you need to look up, and it is worth the time, the keyboard shortcuts and the functionality for the specific AI coding assistant that you have chosen. Most IDE integrations also support selecting code and then choosing to have it explained, fixed, refactored, optimized, or sent to an integrated chatbot.</p>

![Amazon Q screenshot](/assets/blog/ai-coding/AmazonQ.png "Amazon Q screenshot")
<br/>

### Examples


#### General Coding 

```
# Define a Python class called Employee
# It should have the following attributes:
# - id
# - name
# - birth date
# - department
# - title
# The attributes cannot be None and only department and title can be modified after construction
# However, we should be able to access the attributes using methods

// TypeScript function to parse dates from strings. 
// The function handles both YYYY-MM-DD, MM/DD/YYYY formats and returns a datetime object.
```

#### Code Quality
```
What does this code snippet do? Explain how it works.
Code analysis - What is wrong with this code?
Are there good candidates for extract method refactoring?
How can I refactor this code to make the naming more consistent?
List out any security concerns with this code.
What code smells, if any, does this program contain? List and explain them. … How do I fix …
Write a code review for the code below.
```

<p>There are also specialized tools for code quality, such as <a href="https://codeclimate.com/quality">Code Climate</a> and <a href="https://www.treno.io/">Treno.</a></p>
<p>Minified code can be unminified by using the prompt "fix this code:". The quality of the results will vary. There are also open-source LLMs such as <a href="https://github.com/albertan017/LLM4Decompile">LLM4Decompile</a>specifically for decompiling binary code to C.</p>
<p>You can use AI tools for many things, such as linting, calculating cyclomatic complexity, Halstead complexity, maintainability index, code coverage, etc. However, as these items have 100% reliable deterministic tools available, use those instead, and you do not have to worry about hallucinations or mistakes.</p>

#### Data
```
For a <small/large> amounts of <numeric, text, real-time, image, geospatial> data, which free database is best?
Make a <sqlite/MariaDB/Postgresql/SQL Server> database schema design for <inventory/blog/web scraping>. 
It should include tables and relationships between them including primary and foreign keys.
The sql to create those tables
Create the SQL to insert this CSV data ‘0, Babbage, Inventor’ into the user table.
The JSON array: [{‘id’: 1, ‘name’: ‘Turing’, ‘job’: ‘Scientist’}, {‘id’: 2, ‘name’: ‘Bob’,‘job’: ‘Designer’}] in SQL table format.
Create the sql for 20 rows of demo data for the user table.
```

#### APIs
<p>Chatbots are useful for both creating and exposing your own APIs as well as finding and consuming other people’s APIs.</p>

```
Create a Python CRUD rest API for the people TABLE.
What are some publicly available stock price APIs?
Some example Python code for accessing the Finnhub api to get stock prices.
```

#### UI
<p><a href="https://openart.ai">OpenArt</a> and <a href="https://www.canva.com">Canva</a> are sites specifically for creating images and professional designs. <a href="https://teleporthq.io">Teleporthq</a> (React, Vue, Angular, HTML&CSS, or UIDL) and <a href="https://v0.dev/">v0 by Vercel</a> (React and Tailwind CSS) are sites specifically for creating website front-ends. <a href="https://www.animaapp.com/">Anima</a> and <a href="https://www.locofy.ai/">Locofy</a>  are plugins for Figma to generate React, Vue, or HTML code to create website front-ends, with Locofy also supporting Adobe XD as a source and Next.js, Gatsby, or React Native as output targets.</p> 

```
Provide the CSS for a html page to have three columns of text in a newspaper style.
Create an <hero image png\SVG logo> that incorporates the letter S for a technology company.
```

#### Testing
<p>Note: GitHub Copilot allows you to select the code you want to unit test and then ask Copilot <code>#selection write a unit test for this code</code>. Similarly, for Amazon CodeWhisperer, you can select the code you want to test and then right-click 'Send to Amazon CodeWhisperer' -> 'Send to prompt', and in the Amazon CodeWhisperer chat window, type <code>write a unit test for</code>.</p>
<p>For more sophisticated integration and behavior testing, you may need to write a little or even a lot of the test case code manually before your AI assistant has enough context to be helpful.</p>

```
How should I test this program? What would be the most suitable testing framework.
Create a unit test for index.js
Write <unit/integrated/behavior> test cases using XXXX testing framework.
Use a mock object for scraper.js
Simulate user behaviour for this program.
```

#### Documentation
<p>The AI assistant generated documentation may not be perfect, but it can be much quicker to edit than doing it all from scratch.</p>
<ul>
    <li>You can ask your LLM to generate documents such as user manuals, FAQs, README files, API documentation, troubleshooting guides, etc.</li>
    <li>It can generate UML, Mermaid, C4 models (Context, Containers, Components, Code), and other text diagrams.</li>
    <li>Use purpose-built software documentation tools such as:
      <ul>
        <li><a href="https://bit.ai/">BIT.AI</a></li>
        <li><a href="https://www.gitbook.com/">GITBOOK</a></li>
        <li><a href="https://www.readme.com">ReadMe</a></li>
        <li><a href="https://swimm.io/">Swimm</a></li>
        <li><a href="https://mintlify.com/">Mintlify</a></li>
      </ul>
    </li>
    <li>Build your own Chatbot with ChatGPT <a href="https://platform.openai.com/assistants">Assistants</a></li>
</ul>

```
What does this code do?
Generate documentation for this API.
```
<br>

#### Deployment

<p>It may not be the readily apparent, but LLMs can also be helpful for pull requests, virtual machines, cloud infrastructure, and various other aspects of deployment.</p>


```
I added real-time streaming prices to the application using sockets. Write a PR description for this.
Create a Dockerfile for this JavaScript app. 
The main class is index.js. Use the latest Node and install the dependencies using the package.json file in this directory.
Create a Terraform file to provision a type t2.micro AWS EC2 instance which installs the Docker daemon, and returns the hostname.
Create a GitHub Actions workflow that builds the scraper application and on every merge to the master branch deploys it to EKS.

```


#### Ongoing Maintenance, Updates, and Migrations

```
Are there more up-to-date libraries for package.json
Update the code to Java 21
Translate this Javascript code to Python
```

### Other developer related AI tools

<ul>
  <li>UI designer <a href="https://uizard.io/">Uizard</a></li>
  <li>Bug reporter <a href="https://jam.dev/docs/product-features/jamgpt">JamGPT</a> Chrome extension</li>
  <li>Security <a href="https://app.snyk.io/login">Synk</a> finds and fixes security issues in proprietary code</li>
  <li>Issue tracker <a href="https://bugasura.io">Bugasura</a> like JIRA with built-in AI</li>
  <li>Issue tracker <a href="https://github.com/tegonhq/tegon">Tegon</a> open-source, AI-first alternative to Jira, Linear </li>
  <li>Local Git repo code editor <a href="https://github.com/paul-gauthier/aider">Aider</a> is a CLI tool to pair program with LLMs.</li>
  <li>Terminal AI coding agent <a href="https://github.com/plandex-ai/plandex">Plandex</a> for large, complex tasks in existing codebases</li>
</ul>
 

### Books

<a href="https://www.oreilly.com/library/view/ai-assisted-programming/9781098164553/">AI-Assisted Programming</a>  (all stages of code creation)<br>
<a href="https://www.manning.com/books/ai-powered-developer">AI-Powered Developer</a>  (thorough example of doing a significant project)<br>
<a href="https://www.wiley.com/en-ca/Coding+with+AI+For+Dummies-p-9781394249145">Coding with AI for Dummies</a>   (looks at a variety of tools)<br>


### Future (Agents, etc.)

<ul>
  <li><a href="https://github.blog/2024-04-29-github-copilot-workspace/">GitHub Copilot Workspace</a> allows high-level specification and planning similar to using the Chats, but it is also integrated into your IDE and can actually make changes in the project files for you. GCW has a nice feature where it discusses a specification of proposed changes it will make before making the changes. Then, after you approve the steps in the plan, it will make the actual changes in your code for you.</li>
  <li>ChatGPT Plus + <a href="https://python.langchain.com/docs/get_started/introduction">LangChain</a></li>
  <li><a href="">Devin</a> More hype than delivery as of time of writing</li>
</ul>


<br><br>
<img class="cc-icon css-11y11pk" width="32" height="32"  alt="Attribution 4.0 International (CC BY 4.0)" style="display: inline-block;" src="/assets/blog/cc.svg">&nbsp;<img class="cc-icon css-11y11pk" width="32" height="32" style="display: inline-block;" alt="James Sullivan" src="/assets/blog/by.svg">

This article is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> license.