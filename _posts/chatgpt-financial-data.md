---
layout: post
title:  "LLMs and Financial Reference Data"
excerpt: "Leveraging LLMs like ChatGPT for Financial Reference Data"
date: "2023-01-20T09:35:07.322Z"
categories: ML

author:
  name: James Sullivan
  picture: "/assets/blog/authors/js.png"
coverImage: "/assets/blog/chatgpt-financial-data/LLMS2.png"
ogImage:
  url: "/assets/blog/chatgpt-financial-data/LLMS2.png"
---


## Introduction - Generative AI and Large Language Models

If you are like most people who have tried ChatGPT, you have been quite impressed by the results for a good reason. Generative AI is the new trending technology for 2023. DALLE-2 generates images, Copilot from Microsoft generates code, and ChatGPT responds with text. You are no doubt already aware that the latter ChatGPT (GPT stands for "generative pre-trained transformer") by [OpenAI](https://openai.com/) has become extremely popular. OpenAI is among the first companies to make the latest generation of a large language model (LLM) quickly and widely available for use by non-specialists.

In this post, I look into possible applications of large language models for financial reference data, mainly using OpenAI's current offering, which is not yet a production release. OpenAI has several models, but the most suitable model for generating reference data is text-davinci-003 (followed by text-curie-001). I use the text-davinci-003 model in the following examples, except for transcription and translation, which I evaluate using the Whisper Model and ChatGPT. The models are used without any additional tuning to improve performance. I have selected six areas to test. 

## Coverage


  <li>Transcripts (Good)</li>
  <li>Translations (Good)</li>
  <li>Business Description Generation (Good)</li>
  <li>Peer Companies (Good)</li>
  <li>Symbology (require a lot of additional QA)</li>
  <li>Company Executives (unusable)</li>
  <li>Estimates  (unusable)</li>
</ul>

### Transcripts
Machine transcription, also known as Speech-to-Text or Automated Speech Recognition (ASR), uses machine learning to turn audio-containing speech into text. In the finance industry, this audio is usually from earnings calls, annual meetings, analyst calls, investor updates, etc. Around four months ago, OpenAI openly released the [Whisper model](https://openai.com/blog/whisper/), which is as good as a human expert for quality purposes. At the same time, Whisper is much more scalable and timely. These advantages make it trivial for a company to create transcription functionality powered by Whisper and start transcribing audio content even at a large scale. Sites like [MarketBeat](https://www.marketbeat.com/earnings/transcripts/) already provide free transcripts.


### Translation
Machine translation, unlike machine transcription, is still not quite as good as a human expert. However, MT has improved dramatically over the last five years, and the quality of the better machine translation providers is quickly approaching human quality. See this [article](https://metaroids.com/learn/google-translate-vs-chatgpt-vs-deepl-translator-ultimate-showdown/) for a comparison of Google, Deepl, and ChatGPT. The speed and scalability MT brings more than offset minor quality issues, especially for translating news and other large, dynamic content sets. The reason that the primary financial data terminal providers and news aggregators are using MT less than you might expect them to has more to do with third-party content usage rights and contract considerations than with the capabilities of the technology itself. 


### Business Descriptions
The ability of LLMs to summarize text has dramatically improved, and using them for generating business descriptions of companies is now feasible. Market data providers have content teams writing that information for thousands of companies. Expect that work to be done by LLMs in the future and lightly QAed by people. The results will likely be less accurate but more timely as, due to the manual effort and cost, analysts currently update company descriptions infrequently. Using LLMs, the scope of coverage will increase, and many smaller companies will likely have up-to-date business descriptions provided as the cost for doing so decreases dramatically. See the below description for `Tokyo Electron's business description` to get an idea of the quality.

<blockquote>Tokyo Electron is a global company that provides a wide range of advanced technology solutions for the semiconductor, flat panel display, and photovoltaic industries. The company specializes in the development and manufacture of high-quality equipment and materials that are used in the production of semiconductor chips, flat panel displays, and solar panels.
Some of the key products and services offered by Tokyo Electron include semiconductor manufacturing equipment, photolithography systems, chemical vapor deposition equipment, etching equipment, and testing and measurement systems. The company also provides maintenance, repair, and upgrade services to ensure that its customers are able to get the most out of their equipment.
In addition to its technology products, Tokyo Electron is also involved in the research and development of new technologies for the semiconductor and display industries. This includes work on advanced materials, manufacturing processes, and next-generation equipment designs.
Overall, Tokyo Electron is a leading provider of advanced technology solutions for the semiconductor, flat panel display, and photovoltaic industries. Its products and services are used by companies around the world to produce high-quality, innovative products for a variety of applications.</blockquote>

![ChatGPT screenshot](/assets/blog/chatgpt-financial-data/Chat_GPT_20230116.png "ChatGPT screenshot")

### Peer Companies
The results for generating peer companies, primarily a summarization exercise, work well.
`What are peer companies to Tokyo Electron?`
<blockquote>Some peer companies to Tokyo Electron include:<br>
  1. Lam Research Corporation<br>
  2. Applied Materials, Inc.<br>
  3. ASML Holding N.V.<br>
  4. KLA Corporation<br>
  5. Hitachi High-Technologies Corporation<br>
  6. JSR Corporation <br>
  7. Sumco Corporation<br>
  8. Screen Semiconductor Solutions Co., Ltd.<br>
  9. ASM International N.V.<br>
  10. Advantest Corporation</blockquote>


### Symbology
Are LLMs suitable for digging through online data for symbology purposes? `Tokyo Electron's symbols`
> The ticker symbol for Tokyo Electron Limited is "TOELY" on the Tokyo Stock Exchange. 
<span style="color:#FF0000;">WRONG</span> 

> The company is also listed on the NASDAQ stock exchange under the ticker symbol "TOELY". 
<span style="color:#00FF00;">CORRECT</span> 


`Tokyo Electron TSE code`
> The TSE code for Tokyo Electron is "8035." 
<span style="color:#00FF00;">CORRECT</span> 

The accuracy varies depending on how you word the question. However, symbology has the advantage that you have a good chance of immediately spotting a wrong answer. TSE ticker codes are always four or five-digit numbers. UPDATE ChatGPT seems to be continously improved and as of (2023/02/10) it gets the correct answers for `Tokyo Electron's symbols`.

### Executives
The remaining questions are looking for specific information. The model returns plausible-looking answers that are also very wrong. Notice it generates Japanese names for a Japanese company, but unfortunately, not the correct ones.
`Who are Tokyo Electron's executives?`
> Tokyo Electron's executives include:
>  1. Tetsuro Higashi - President and Chief Executive Officer <span style="color:#FF0000;">WRONG (old)</span> 
>  2. Keiji Kato - Executive Vice President and Chief Financial Officer <span style="color:#FF0000;">WRONG</span> 
>  3. Shunichi Miyanaga - Executive Vice President and Chief Operating Officer <span style="color:#FF0000;">WRONG</span> 
>  4. Tetsuro Ii - Executive Vice President and Chief Technology Officer <span style="color:#FF0000;">WRONG</span> 
>  5. Takayuki Yano - Executive Vice President and Chief Legal Officer <span style="color:#FF0000;">WRONG</span> 

### Financials
`Tokyo Electron Financials as reported?`  
<blockquote>Tokyo Electron Limited is a Japanese semiconductor and flat panel display equipment manufacturer. According to its latest financial report (as of March 31, 2020), the company's net sales for the fiscal year were $9.2 billion, with a net income of $547 million. The company's assets totaled $7.5 billion, with liabilities of $3.3 billion. Tokyo Electron has a market capitalization of $16.5 billion and a price-to-earnings ratio of 19.5. The company's stock has been trading at around $61 per share.</blockquote> <span style="color:#FF0000;">NOT USABLE</span> 



## API Code Example

The [OpenAI API](https://beta.openai.com/playground) is well-documented and extremely easy to use. For Python just install openai library at the command line via `pip install openai` and get an api key.


```

import os
import openai
openai.api_key = "My secret api key"

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="Peers of Tokyo Electron",
  temperature=0,
  max_tokens=100
)
print(response)

```


## Conclusion

Certain substantial areas of Financial Reference data, such as transcripts, translations, business descriptions, peer companies, etc., no longer need to be done by humans and will instead be generated by large language models. The models bring speed and scalability to developing financial reference data. However, there are also reference data domains where humans are still needed, and the areas may surprise you. There are several drawbacks to using LLMs for financial reference data. Training sets for LLMs are now so large that it is costly and time-consuming to train models, and they can only be run periodically; as a result, their answers will be months old. A more significant drawback is that LLMs always have an answer, even if it is specious. If the models gave a clearly wrong answer, they would be easier to adjust for, but by their very nature, they come up with plausible-looking solutions even when they are wrong. 

Moreover, there is an art to asking the question in the right way to get correct answers, called prompt engineering. Questions that involve some form of summarization work well, while specific questions requiring a specific answer are very much hit-or-miss. These weaknesses in current LLMs may lead to lower quality financial reference data available cheaply or for free, while quality data remains expensive. The problem being it takes substantial effort to discover the quality of the data generated. How to improve and customize the results from these models and measure the quality will be a new business opportunity going forward.


### To Cover in future - Improvement and Customization
I did not cover how to improve and customize LLMs for specific needs. There are three ways you can enhance the applicability of third-party language models:

<ul style="list-style-type:disc;">
   <li>Prompt engineering.</li>
   <li>Add additional training cases for your particular use case (called <a href="https://beta.openai.com/docs/guides/fine-tuning">fine-tuning</a> by OpenAI).</li>
   <li>Combine the results with other sources of computation or knowledge. Tools such as <a href="https://github.com/hwchase17/langchain">LangChain</a> are helpful.</li>
</ul>

### Update
A paper was recently (Mar 2023) released on BloombergGPT, a 50 billion parameter language model that is trained on a wide range of financial data. They use a 363 billion token dataset based on Bloomberg’s extensive data sources, augmented with 345 billion tokens from general purpose datasets. This model undoubtedly gives better results for the financial domain, but likely doesn't solve any of the fundamental problems with LLMs. [BloombergGPT: A Large Language Model for Finance](https://arxiv.org/pdf/2303.17564.pdf)

### Related Links
- [Google Research, 2022 & Beyond: Language, Vision and Generative Models](https://ai.googleblog.com/2023/01/google-research-2022-beyond-language.html)
- [Who Owns the Generative AI Platform?](https://a16z.com/2023/01/19/who-owns-the-generative-ai-platform/)
- [ChatGPT is not all you need. A State of the Art Review of large Generative AI models](https://arxiv.org/pdf/2301.04655)
- [5 Steps To Production Level GPT-3 Language Translation Software](https://www.width.ai/post/gpt-3-language-translation-software)
- [MS research building AI products w/ foundation models](https://github.com/microsoft/LMOp)
- [There's an AI for that](https://theresanaiforthat.com/)
- [Precise Zero-Shot Dense Retrieval without Relevance Labels](https://arxiv.org/pdf/2212.10496.pdf)

<br><br>
<img class="cc-icon css-11y11pk" width="32" height="32"  alt="Attribution 4.0 International (CC BY 4.0)" style="display: inline-block;" src="/assets/blog/cc.svg">&nbsp;<img class="cc-icon css-11y11pk" width="32" height="32" style="display: inline-block;" alt="James Sullivan" src="/assets/blog/by.svg">

This article is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> license.