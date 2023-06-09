import{_ as t,o as e,c as n,e as d}from"./app-9a7305ee.js";const i={},l=d(`<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1><h2 id="常用正则表达式" tabindex="-1"><a class="header-anchor" href="#常用正则表达式" aria-hidden="true">#</a> 常用正则表达式</h2><h3 id="一、校验数字" tabindex="-1"><a class="header-anchor" href="#一、校验数字" aria-hidden="true">#</a> 一、校验数字</h3><div class="language-haml line-numbers-mode" data-ext="haml"><pre class="language-haml"><code>1. 数字：^[0-9]*$

2. n位的数字：^\\d{n}$

3. 至少n位的数字：^\\d{n,}$

4. m-n位的数字：^\\d{m,n}$

5. 零和非零开头的数字：^(0|[1-9][0-9]*)$

6. 非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?$

7. 带1-2位小数的正数或负数：^(\\-)?\\d+(\\.\\d{1,2})?$

8. 正数、负数、和小数：^(\\-|\\+)?\\d+(\\.\\d+)?$

9. 有两位小数的正实数：^[0-9]+(.[0-9]{2})?$

10. 有1~3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$

11. 非零的正整数：^[1-9]\\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\\+?[1-9][0-9]*$

12. 非零的负整数：^\\-[1-9][]0-9&quot;*$ 或 ^-[1-9]\\d*$

13. 非负整数：^\\d+$ 或 ^[1-9]\\d*|0$

14. 非正整数：^-[1-9]\\d*|0$ 或 ^((-\\d+)|(0+))$

15. 非负浮点数：^\\d+(\\.\\d+)?$ 或 ^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$

16. 非正浮点数：^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$ 或 ^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$

17. 正浮点数：^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$ 或 ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$

18. 负浮点数：^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$ 或 ^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$

19. 浮点数：^(-?\\d+)(\\.\\d+)?$ 或 ^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、校验字符的表达式" tabindex="-1"><a class="header-anchor" href="#二、校验字符的表达式" aria-hidden="true">#</a> 二、校验字符的表达式</h3><div class="language-haml line-numbers-mode" data-ext="haml"><pre class="language-haml"><code>1. 汉字：^[\\u4e00-\\u9fa5]{0,}$

2. 英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$

3. 长度为3-20的所有字符：^.{3,20}$

4. 由26个英文字母组成的字符串：^[A-Za-z]+$

5. 由26个大写英文字母组成的字符串：^[A-Z]+$

6. 由26个小写英文字母组成的字符串：^[a-z]+$

7. 由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$

8. 由数字、26个英文字母或者下划线组成的字符串：^\\w+$ 或 ^\\w{3,20}$

9. 中文、英文、数字包括下划线：^[\\u4E00-\\u9FA5A-Za-z0-9_]+$

10. 中文、英文、数字但不包括下划线等符号：^[\\u4E00-\\u9FA5A-Za-z0-9]+$ 或 ^[\\u4E00-\\u9FA5A-Za-z0-9]{2,20}$

11. 可以输入含有^%&amp;&#39;,;=?$\\&quot;等字符：[^%&amp;&#39;,;=?$\\x22]+ 12 禁止输入含有~的字符：[^~\\x22]+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、特殊需求表达式" tabindex="-1"><a class="header-anchor" href="#三、特殊需求表达式" aria-hidden="true">#</a> 三、特殊需求表达式</h3><div class="language-haml line-numbers-mode" data-ext="haml"><pre class="language-haml"><code>1. Email地址：^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$

2. 域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?

3. InternetURL：[a-zA-z]+://[^\\s]* 或 ^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$

4. 手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$

5. 电话号码(&quot;XXX-XXXXXXX&quot;、&quot;XXXX-XXXXXXXX&quot;、&quot;XXX-XXXXXXX&quot;、&quot;XXX-XXXXXXXX&quot;、&quot;XXXXXXX&quot;和&quot;XXXXXXXX)：^(\\(\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$

6. 国内电话号码(0511-4405222、021-87888822)：\\d{3}-\\d{8}|\\d{4}-\\d{7}

7. 身份证号(15位、18位数字)：^\\d{15}|\\d{18}$

8. 短身份证号码(数字、字母x结尾)：^([0-9]){7,18}(x|X)?$ 或 ^\\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$

9. 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$

10. 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\\w{5,17}$

11. 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$

12. 日期格式：^\\d{4}-\\d{1,2}-\\d{1,2}

13. 一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$

14. 一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$

15. 钱的输入格式：

16. 1.有四种钱的表示形式我们可以接受:&quot;10000.00&quot; 和 &quot;10,000.00&quot;, 和没有 &quot;分&quot; 的 &quot;10000&quot; 和 &quot;10,000&quot;：^[1-9][0-9]*$

17. 2.这表示任意一个不以0开头的数字,但是,这也意味着一个字符&quot;0&quot;不通过,所以我们采用下面的形式：^(0|[1-9][0-9]*)$

18. 3.一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]*)$

19. 4.这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$

20. 5.必须说明的是,小数点后面至少应该有1位数,所以&quot;10.&quot;是不通过的,但是 &quot;10&quot; 和 &quot;10.2&quot; 是通过的：^[0-9]+(.[0-9]{2})?$

21. 6.这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：^[0-9]+(.[0-9]{1,2})?$

22. 7.这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$

23 8.1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$

24. 备注：这就是最终结果了,别忘了&quot;+&quot;可以用&quot;*&quot;替代如果你觉得空字符串也可以接受的话(奇怪,为什么?)最后,别忘了在用函数时去掉去掉那个反斜杠,一般的错误都在这里

25. xml文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$

26. 中文字符的正则表达式：[\\u4e00-\\u9fa5]

27. 双字节字符：[^\\x00-\\xff] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))

28. 空白行的正则表达式：\\n\\s*\\r (可以用来删除空白行)

29. HTML标记的正则表达式：&lt;(\\S*?)[^&gt;]*&gt;.*?&lt;/\\1&gt;|&lt;.*? /&gt; (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)

30. 首尾空白字符的正则表达式：^\\s*|\\s*$或(^\\s*)|(\\s*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)

31. 腾讯QQ号：[1-9][0-9]{4,} (腾讯QQ号从10000开始)

32. 中国邮政编码：[1-9]\\d{5}(?!\\d) (中国邮政编码为6位数字)

33. IP地址：\\d+\\.\\d+\\.\\d+\\.\\d+ (提取IP地址时有用)

34. IP地址：((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))

35. IP-v4地址：\\\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\b (提取IP地址时有用)

36. 校验IP-v6地址:(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))

37. 子网掩码：((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))

38. 校验日期:^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$(“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年。)

39. 抽取注释：&lt;!--(.*?)--&gt;

40. 查找CSS属性:^\\\\s*[a-zA-Z\\\\-]+\\\\s*[:]{1}\\\\s[a-zA-Z0-9\\\\s.#]+[;]{1}

41. 提取页面超链接:(&lt;a\\\\s*(?!.*\\\\brel=)[^&gt;]*)(href=&quot;https?:\\\\/\\\\/)((?!(?:(?:www\\\\.)?&#39;.implode(&#39;|(?:www\\\\.)?&#39;, $follow_list).&#39;))[^&quot; rel=&quot;external nofollow&quot; ]+)&quot;((?!.*\\\\brel=)[^&gt;]*)(?:[^&gt;]*)&gt;

42. 提取网页图片:\\\\&lt; *[img][^\\\\\\\\&gt;]*[src] *= *[\\\\&quot;\\\\&#39;]{0,1}([^\\\\&quot;\\\\&#39;\\\\ &gt;]*)

43. 提取网页颜色代码:^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$

44. 文件扩展名效验:^([a-zA-Z]\\\\:|\\\\\\\\)\\\\\\\\([^\\\\\\\\]+\\\\\\\\)*[^\\\\/:*?&quot;&lt;&gt;|]+\\\\.txt(l)?$

45. 判断IE版本：^.*MSIE [5-8](?:\\\\.[0-9]+)?(?!.*Trident\\\\/[5-9]\\\\.0).*$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">元字符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">|将下一个字符标记符、或一个向后引用、或一个八进制转义符。例如，“\\\\n”匹配\\n。“\\n”匹配换行符。序列“\\\\”匹配“\\”而“\\(”则匹配“(”。即相当于多种编程语言中都有的“转义字符”的概念。</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">^</td><td style="text-align:center;">匹配输入字行首。如果设置了RegExp对象的Multiline属性，^也匹配“\\n”或“\\r”之后的位置。</td></tr><tr><td style="text-align:center;">$</td><td style="text-align:center;">匹配输入行尾。如果设置了RegExp对象的Multiline属性，$也匹配“\\n”或“\\r”之前的位置。</td></tr><tr><td style="text-align:center;">*</td><td style="text-align:center;">匹配前面的子表达式任意次。例如，zo*能匹配“z”，也能匹配“zo”以及“zoo”。*等价于{0,}。</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">匹配前面的子表达式一次或多次(大于等于1次）。例如，“zo+”能匹配“zo”以及“zoo”，但不能匹配“z”。+等价于{1,}。</td></tr><tr><td style="text-align:center;">?</td><td style="text-align:center;">匹配前面的子表达式零次或一次。例如，“do(es)?”可以匹配“do”或“does”。?等价于{0,1}。</td></tr><tr><td style="text-align:center;">{n}</td><td style="text-align:center;">n是一个非负整数。匹配确定的n次。例如，“o{2}”不能匹配“Bob”中的“o”，但是能匹配“food”中的两个o。</td></tr><tr><td style="text-align:center;">{n,}</td><td style="text-align:center;">n是一个非负整数。至少匹配n次。例如，“o{2,}”不能匹配“Bob”中的“o”，但能匹配“foooood”中的所有o。“o{1,}”等价于“o+”。“o{0,}”则等价于“o*”。</td></tr><tr><td style="text-align:center;">{n,m}</td><td style="text-align:center;">m和n均为非负整数，其中n&lt;=m。最少匹配n次且最多匹配m次。例如，“o{1,3}”将匹配“fooooood”中的前三个o为一组，后三个o为一组。“o{0,1}”等价于“o?”。请注意在逗号和两个数之间不能有空格。</td></tr><tr><td style="text-align:center;">?</td><td style="text-align:center;">当该字符紧跟在任何一个其他限制符（*,+,?，{n}，{n,}，{n,m}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少地匹配所搜索的字符串，而默认的贪婪模式则尽可能多地匹配所搜索的字符串。例如，对于字符串“oooo”，“o+”将尽可能多地匹配“o”，得到结果[“oooo”]，而“o+?”将尽可能少地匹配“o”，得到结果 [&#39;o&#39;, &#39;o&#39;, &#39;o&#39;, &#39;o&#39;]</td></tr><tr><td style="text-align:center;">.点</td><td style="text-align:center;">匹配除“\\n”和&quot;\\r&quot;之外的任何单个字符。要匹配包括“\\n”和&quot;\\r&quot;在内的任何字符，请使用像“[\\s\\S]”的模式。</td></tr><tr><td style="text-align:center;">(pattern)</td><td style="text-align:center;">匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“”或“”。</td></tr><tr><td style="text-align:center;">(?:pattern)</td><td style="text-align:center;">非获取匹配，匹配pattern但不获取匹配结果，不进行存储供以后使用。这在使用或字符“(|)”来组合一个模式的各个部分时很有用。例如“industr(?:y|ies)”就是一个比“industry|industries”更简略的表达式。</td></tr><tr><td style="text-align:center;">(?=pattern)</td><td style="text-align:center;">非获取匹配，正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如，“Windows(?=95|98|NT|2000)”能匹配“Windows2000”中的“Windows”，但不能匹配“Windows3.1”中的“Windows”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。</td></tr><tr><td style="text-align:center;">(?!pattern)</td><td style="text-align:center;">非获取匹配，正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如“Windows(?!95|98|NT|2000)”能匹配“Windows3.1”中的“Windows”，但不能匹配“Windows2000”中的“Windows”。</td></tr><tr><td style="text-align:center;">(?&lt;=pattern)</td><td style="text-align:center;">非获取匹配，反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“(?&lt;=95|98|NT|2000)Windows”能匹配“2000Windows”中的“Windows”，但不能匹配“3.1Windows”中的“Windows”。*python的正则表达式没有完全按照正则表达式规范实现，所以一些高级特性建议使用其他语言如java、scala等</td></tr><tr><td style="text-align:center;">(?&lt;!patte_n)</td><td style="text-align:center;">非获取匹配，反向否定预查，与正向否定预查类似，只是方向相反。例如“(?&lt;!95|98|NT|2000)Windows”能匹配“3.1Windows”中的“Windows”，但不能匹配“2000Windows”中的“Windows”。*python的正则表达式没有完全按照正则表达式规范实现，所以一些高级特性建议使用其他语言如java、scala等</td></tr><tr><td style="text-align:center;">x|y</td><td style="text-align:center;">匹配x或y。例如，“z|food”能匹配“z”或“food”(此处请谨慎)。“[z|f]ood”则匹配“zood”或“food”。</td></tr><tr><td style="text-align:center;">[xyz]</td><td style="text-align:center;">字符集合。匹配所包含的任意一个字符。例如，“[abc]”可以匹配“plain”中的“a”。</td></tr><tr><td style="text-align:center;">[^xyz]</td><td style="text-align:center;">负值字符集合。匹配未包含的任意字符。例如，“[^abc]”可以匹配“plain”中的“plin”任一字符。</td></tr><tr><td style="text-align:center;">[a-z]</td><td style="text-align:center;">字符范围。匹配指定范围内的任意字符。例如，“[a-z]”可以匹配“a”到“z”范围内的任意小写字母字符。 注意:只有连字符在字符组内部时,并且出现在两个字符之间时,才能表示字符的范围; 如果出字符组的开头,则只能表示连字符本身.</td></tr><tr><td style="text-align:center;">[^a-z]</td><td style="text-align:center;">负值字符范围。匹配任何不在指定范围内的任意字符。例如，“[^a-z]”可以匹配任何不在“a”到“z”范围内的任意字符。</td></tr><tr><td style="text-align:center;">\\b</td><td style="text-align:center;">匹配一个单词的边界，也就是指单词和空格间的位置（即正则表达式的“匹配”有两种概念，一种是匹配字符，一种是匹配位置，这里的\\b就是匹配位置的）。例如，“er\\b”可以匹配“never”中的“er”，但不能匹配“verb”中的“er”；“\\b1_”可以匹配“1_23”中的“1_”，但不能匹配“21_3”中的“1_”。</td></tr><tr><td style="text-align:center;">\\B</td><td style="text-align:center;">匹配非单词边界。“er\\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”。</td></tr><tr><td style="text-align:center;">\\cx</td><td style="text-align:center;">匹配由x指明的控制字符。例如，\\cM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“c”字符。</td></tr><tr><td style="text-align:center;">\\d</td><td style="text-align:center;">匹配一个数字字符。等价于[0-9]。grep 要加上-P，perl正则支持</td></tr><tr><td style="text-align:center;">\\D</td><td style="text-align:center;">匹配一个非数字字符。等价于[^0-9]。grep要加上-P，perl正则支持</td></tr><tr><td style="text-align:center;">\\f</td><td style="text-align:center;">匹配一个换页符。等价于\\x0c和\\cL。</td></tr><tr><td style="text-align:center;">\\n</td><td style="text-align:center;">匹配一个换行符。等价于\\x0a和\\cJ。</td></tr><tr><td style="text-align:center;">\\r</td><td style="text-align:center;">匹配一个回车符。等价于\\x0d和\\cM。</td></tr><tr><td style="text-align:center;">\\s</td><td style="text-align:center;">匹配任何不可见字符，包括空格、制表符、换页符等等。等价于[ \\f\\n\\r\\t\\v]。</td></tr><tr><td style="text-align:center;">\\S</td><td style="text-align:center;">匹配任何可见字符。等价于[^ \\f\\n\\r\\t\\v]。</td></tr><tr><td style="text-align:center;">\\t</td><td style="text-align:center;">匹配一个制表符。等价于\\x09和\\cI。</td></tr><tr><td style="text-align:center;">\\v</td><td style="text-align:center;">匹配一个垂直制表符。等价于\\x0b和\\cK。</td></tr><tr><td style="text-align:center;">\\w</td><td style="text-align:center;">匹配包括下划线的任何单词字符。类似但不等价于“[A-Za-z0-9_]”，这里的&quot;单词&quot;字符使用Unicode字符集。</td></tr><tr><td style="text-align:center;">\\W</td><td style="text-align:center;">匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。</td></tr><tr><td style="text-align:center;">\\xn</td><td style="text-align:center;">匹配n，其中n为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“\\x41”匹配“A”。“\\x041”则等价于“\\x04&amp;1”。正则表达式中可以使用ASCII编码。</td></tr><tr><td style="text-align:center;">\\num</td><td style="text-align:center;">匹配num，其中num是一个正整数。对所获取的匹配的引用。例如，“(.)\\1”匹配两个连续的相同字符。</td></tr><tr><td style="text-align:center;">\\n</td><td style="text-align:center;">标识一个八进制转义值或一个向后引用。如果\\n之前至少n个获取的子表达式，则n为向后引用。否则，如果n为八进制数字（0-7），则n为一个八进制转义值。</td></tr><tr><td style="text-align:center;">\\nm</td><td style="text-align:center;">标识一个八进制转义值或一个向后引用。如果\\nm之前至少有nm个获得子表达式，则nm为向后引用。如果\\nm之前至少有n个获取，则n为一个后跟文字m的向后引用。如果前面的条件都不满足，若n和m均为八进制数字（0-7），则\\nm将匹配八进制转义值nm。</td></tr><tr><td style="text-align:center;">\\nml</td><td style="text-align:center;">如果n为八进制数字（0-7），且m和l均为八进制数字（0-7），则匹配八进制转义值nml。</td></tr><tr><td style="text-align:center;">\\un</td><td style="text-align:center;">匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\\u00A9匹配版权符号（©）。</td></tr><tr><td style="text-align:center;">\\p{P}</td><td style="text-align:center;">小写 p 是 property 的意思，表示 Unicode 属性，用于 Unicode 正表达式的前缀。中括号内的“P”表示Unicode 字符集七个字符属性之一：标点字符。其他六个属性：L：字母； M：标记符号（一般不会单独出现）； Z：分隔符（比如空格、换行等）； S：符号（比如数学符号、货币符号等）； N：数字（比如阿拉伯数字、罗马数字等）； C：其他字符。*注：此语法部分语言不支持，例：javascript。</td></tr><tr><td style="text-align:center;">&lt; &gt;</td><td style="text-align:center;">匹配词（word）的开始（&lt;）和结束（&gt;）。例如正则表达式&lt;the&gt;能够匹配字符串&quot;for the wise&quot;中的&quot;the&quot;，但是不能匹配字符串&quot;otherwise&quot;中的&quot;the&quot;。注意：这个元字符不是所有的软件都支持的。</td></tr><tr><td style="text-align:center;">( )</td><td style="text-align:center;">将( 和 ) 之间的表达式定义为“组”（group），并且将匹配这个表达式的字符保存到一个临时区域（一个正则表达式中最多可以保存9个），它们可以用 \\1 到\\9 的符号来引用。</td></tr><tr><td style="text-align:center;">| 将两个匹配条件进行逻辑“或”（or）运算。例如正则表达式(him</td><td style="text-align:center;">her) 匹配&quot;it belongs to him&quot;和&quot;it belongs to her&quot;，但是不能匹配&quot;it belongs to them.&quot;。注意：这个元字符不是所有的软件都支持的。</td></tr></tbody></table>`,9),s=[l];function r(a,v){return e(),n("div",null,s)}const u=t(i,[["render",r],["__file","正则.html.vue"]]);export{u as default};
