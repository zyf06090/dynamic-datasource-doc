(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{369:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("dynamic-datasource-spring-boot-starter 🔥 is a project based on the SpringBoot to make it easyly to use dynamic datasource.")]),t._v(" "),a("p",[t._v("support "),a("strong",[t._v("Jdk 1.7+,    SpringBoot 1.5.x 和  2.x.x")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"convention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convention"}},[t._v("#")]),t._v(" convention")]),t._v(" "),a("ol",[a("li",[t._v("This project just do "),a("strong",[t._v("switch datasource")]),t._v(" core thing.")]),t._v(" "),a("li",[t._v("Every datasource name start with "),a("code",[t._v("_")]),t._v(" with the same word will be a group.")]),t._v(" "),a("li",[t._v("You can use group name to switch db or just the name.")]),t._v(" "),a("li",[t._v("degault db is  "),a("strong",[t._v("master")]),t._v(" ，you can change it at "),a("code",[t._v("spring.datasource.dynamic.primary")]),t._v(".")]),t._v(" "),a("li",[t._v("method annotation have priority over class annotation.")])]),t._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),a("ol",[a("li",[t._v("import dynamic-datasource-spring-boot-starter.\n"),a("a",{attrs:{href:"http://mvnrepository.com/artifact/com.baomidou/dynamic-datasource-spring-boot-starter",target:"_blank"}},[a("img",{attrs:{src:"https://img.shields.io/maven-central/v/com.baomidou/dynamic-datasource-spring-boot-starter.svg"}})])])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.baomidou"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dynamic-datasource-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("config datasouce.")])]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("primary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//xx.xx.xx.xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/dynamic\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//xx.xx.xx.xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3307/dynamic\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx)\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx)\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx)\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db/schema.sql\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db/data.sql\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("continue-on-error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("separator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v("\n          \n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#......")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                             "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                             "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oracle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sqlserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("postgresql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oracle_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                                   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oracle_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("use "),a("strong",[t._v("@DS")]),t._v(" to switch datasource.")])]),t._v(" "),a("p",[a("strong",[t._v("@DS")]),t._v(" 可以注解在方法上或类上，"),a("strong",[t._v("同时存在就近原则 方法上注解 优先于 类上注解")]),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("注解")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("没有@DS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认数据源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('@DS("dsName")')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dsName可以为组名也可以为具体某个库的名称")])])])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slave"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserServiceImpl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdbcTemplate")]),t._v(" jdbcTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  jdbcTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryForList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slave_1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectByCondition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  jdbcTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryForList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from user where age >10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);