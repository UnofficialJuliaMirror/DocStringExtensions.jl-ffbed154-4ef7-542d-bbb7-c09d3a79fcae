var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#DocStringExtensions",
    "page": "Home",
    "title": "DocStringExtensions",
    "category": "module",
    "text": "Extensions for the Julia docsystem.\n\nIntroduction\n\nThis package provides a collection of useful extensions for Julia\'s built-in docsystem. These are features that are still regarded as \"experimental\" and not yet mature enough to be considered for inclusion in Base, or that have sufficiently niche use cases that including them with the default Julia installation is not seen as valuable enough at this time.\n\nCurrently DocStringExtensions.jl exports a collection of so-called \"abbreviations\", which can be used to add useful automatically generated information to docstrings. These include information such as:\n\nsimplified method signatures;\ndocumentation for the individual fields of composite types;\nimport and export lists for modules;\nand source-linked lists of methods applicable to a particular docstring.\n\nUsers are most welcome to suggest additional abbreviation ideas, or implement and submit them themselves. Julia\'s strong support for program introspection makes this a reasonably straight forward process.\n\nDetails of the currently available abbreviations can be viewed in their individual docstrings listed below in the \"Exports\" section.\n\nExamples\n\nIn simple terms an abbreviation can be used by simply interpolating it into a suitable docstring. For example:\n\nusing DocStringExtensions\n\n\"\"\"\nA short summary of `func`...\n\n$(SIGNATURES)\n\nwhere `x` and `y` should both be positive.\n\n# Details\n\nSome details about `func`...\n\"\"\"\nfunc(x, y) = x + y\n\n$(SIGNATURES) will be replaced in the above docstring with\n\n# Signatures\n\n```julia\nfunc(x, y)\n```\n\nThe resulting generated content can be viewed via Julia\'s ? mode or, if Documenter.jl is set up, the generated external documentation.\n\nThe advantage of using SIGNATURES (and other abbreviations) is that docstrings are less likely to become out-of-sync with the surrounding code. Note though that references to the argument names x and y that have been manually embedded within the docstring are, of course, not updated automatically.\n\nExports\n\nDOCSTRING\nEXPORTS\nFIELDS\nIMPORTS\nMETHODLIST\nSIGNATURES\nTYPEDEF\n@template\n\nImports\n\nBase\nCompat\nCore\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions-1",
    "page": "Home",
    "title": "DocStringExtensions",
    "category": "section",
    "text": "DocStringExtensions"
},

{
    "location": "index.html#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": "Modules = [DocStringExtensions]"
},

{
    "location": "index.html#DocStringExtensions.DOCSTRING",
    "page": "Home",
    "title": "DocStringExtensions.DOCSTRING",
    "category": "constant",
    "text": "An Abbreviation used in @template definitions to represent the location of the docstring body that should be spliced into a template.\n\nwarning: Warning\nThis abbreviation must only ever be used in template strings; never normal docstrings.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.EXPORTS",
    "page": "Home",
    "title": "DocStringExtensions.EXPORTS",
    "category": "constant",
    "text": "An Abbreviation to include all the exported names of a module is a sorted list of Documenter.jl-style @ref links.\n\nnote: Note\nThe names are sorted alphabetically and ignore leading @ characters so that macros are not sorted before other names.\n\nExamples\n\nThe markdown text generated by the EXPORTS abbreviation looks similar to the following:\n\n\n  - [`bar`](@ref)\n  - [`@baz`](@ref)\n  - [`foo`](@ref)\n\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.FIELDS",
    "page": "Home",
    "title": "DocStringExtensions.FIELDS",
    "category": "constant",
    "text": "An Abbreviation to include the names of the fields of a type as well as any documentation that may be attached to the fields.\n\nExamples\n\nThe generated markdown text should look similar to to following example where a type has three fields (x, y, and z) and the last two have documentation attached.\n\n\n  - `x`\n\n  - `y`\n\n    Unlike the `x` field this field has been documented.\n\n  - `z`\n\n    Another documented field.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.IMPORTS",
    "page": "Home",
    "title": "DocStringExtensions.IMPORTS",
    "category": "constant",
    "text": "An Abbreviation to include all the imported modules in a sorted list.\n\nExamples\n\nThe markdown text generated by the IMPORTS abbreviation looks similar to the following:\n\n\n  - `Foo`\n  - `Bar`\n  - `Baz`\n\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.METHODLIST",
    "page": "Home",
    "title": "DocStringExtensions.METHODLIST",
    "category": "constant",
    "text": "An Abbreviation for including a list of all the methods that match a documented Method, Function, or DataType within the current module.\n\nExamples\n\nThe generated markdown text will look similar to the following example where a function f defines two different methods (one that takes a number, and the other a string):\n\n```julia\nf(num)\n```\n\ndefined at [`<path>:<line>`](<github-url>).\n\n```julia\nf(str)\n```\n\ndefined at [`<path>:<line>`](<github-url>).\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.SIGNATURES",
    "page": "Home",
    "title": "DocStringExtensions.SIGNATURES",
    "category": "constant",
    "text": "An Abbreviation for including a simplified representation of all the method signatures that match the given docstring. See printmethod for details on the simplifications that are applied.\n\nExamples\n\nThe generated markdown text will look similar to the following example where a function f defines method taking two positional arguments, x and y, and two keywords, a and the b.\n\n```julia\nf(x, y; a, b...)\n```\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.TYPEDEF",
    "page": "Home",
    "title": "DocStringExtensions.TYPEDEF",
    "category": "constant",
    "text": "An Abbreviation for including a summary of the signature of a type definition. Some of the following information may be included in the output:\n\nwhether the object is an abstract type or a bitstype;\nmutability (either type or struct is printed);\nthe unqualified name of the type;\nany type parameters;\nthe supertype of the type if it is not Any.\n\nExamples\n\nThe generated output for a type definition such as:\n\n\"\"\"\n$(TYPEDEF)\n\"\"\"\nstruct MyType{S, T <: Integer} <: AbstractArray\n    # ...\nend\n\nwill look similar to the following:\n\n```julia\nstruct MyType{S, T<:Integer} <: AbstractArray\n```\n\nnote: Note\nNo information about the fields of the type is printed. Use the FIELDS abbreviation to include information about the fields of a type.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.@template-Tuple{Any}",
    "page": "Home",
    "title": "DocStringExtensions.@template",
    "category": "macro",
    "text": "@template(ex)\n\n\nDefines a docstring template that will be applied to all docstrings in a module that match the specified category or tuple of categories.\n\nExamples\n\n@template DEFAULT =\n    \"\"\"\n    $(SIGNATURES)\n    $(DOCSTRING)\n    \"\"\"\n\nDEFAULT is the default template that is applied to a docstring if no other template definitions match the documented expression. The DOCSTRING abbreviation is used to mark the location in the template where the actual docstring body will be spliced into each docstring.\n\n@template (FUNCTIONS, METHODS, MACROS) =\n    \"\"\"\n    $(SIGNATURES)\n    $(DOCSTRING)\n    $(METHODLIST)\n    \"\"\"\n\nA tuple of categories can be specified when a docstring template should be used for several different categories.\n\n@template MODULES = ModName\n\nThe template definition above will define a template for module docstrings based on the template for modules found in module ModName.\n\nnote: Note\nSupported categories are DEFAULT, FUNCTIONS, METHODS, MACROS, TYPES, MODULES, and CONSTANTS.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.alltypesigs-Tuple{Any}",
    "page": "Home",
    "title": "DocStringExtensions.alltypesigs",
    "category": "method",
    "text": "alltypesigs(sig)\n\n\nReturns a Vector of the Tuple types contained in sig.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.arguments-Tuple{Method}",
    "page": "Home",
    "title": "DocStringExtensions.arguments",
    "category": "method",
    "text": "arguments(m)\n\n\nReturns the list of arguments for a particular method m.\n\nExamples\n\nf(x; a = 1, b...) = x\nargs = arguments(first(methods(f)))\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.cleanpath-Tuple{AbstractString}",
    "page": "Home",
    "title": "DocStringExtensions.cleanpath",
    "category": "method",
    "text": "cleanpath(path)\n\n\nRemove the Pkg.dir part of a file path if it exists.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.comparemethods-Tuple{Method,Method}",
    "page": "Home",
    "title": "DocStringExtensions.comparemethods",
    "category": "method",
    "text": "comparemethods(a, b)\n\n\nCompare methods a and b by file and line number.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.format-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "DocStringExtensions.format",
    "category": "method",
    "text": "format(abbr, buf, doc)\n\n\nExpand the Abbreviation abbr in the context of the DocStr doc and write the resulting markdown-formatted text to the IOBuffer buf.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.getmethods!-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "DocStringExtensions.getmethods!",
    "category": "method",
    "text": "getmethods!(results, f, sig)\n\n\nA helper method for getmethods that collects methods in results.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.getmethods-Tuple{Any,Any}",
    "page": "Home",
    "title": "DocStringExtensions.getmethods",
    "category": "method",
    "text": "getmethods(f, sig)\n\n\nCollect and return all methods of function f matching signature sig.\n\nThis is similar to methods(f, sig), but handles type signatures found in DocStr objects more consistently that methods.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.groupby!-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "DocStringExtensions.groupby!",
    "category": "method",
    "text": "groupby!(f, groups, data)\n\n\nA helper method for groupby that uses a pre-allocated groups Dict.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.groupby-NTuple{4,Any}",
    "page": "Home",
    "title": "DocStringExtensions.groupby",
    "category": "method",
    "text": "groupby(f, K, V, data)\n\n\nGroup data using function f where key type is specified by K and group type by V.\n\nThe function f takes a single argument, an element of data, and should return a 2-tuple of (computed_key, element). See the example below for details.\n\nExamples\n\ngroupby(Int, Vector{Int}, collect(1:10)) do num\n    mod(num, 3), num\nend\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.hook!-Tuple{Any}",
    "page": "Home",
    "title": "DocStringExtensions.hook!",
    "category": "method",
    "text": "hook!(func)\n\n\nSet the docstring expander function to first call func before calling the default expander.\n\nTo remove a hook that has been applied using this method call hook!().\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.hook!-Tuple{}",
    "page": "Home",
    "title": "DocStringExtensions.hook!",
    "category": "method",
    "text": "hook!()\n\n\nReset the docstring expander to only call the default expander function. This clears any \'hook\' that has been set using hook!(func).\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.isabstracttype-Tuple{ANY}",
    "page": "Home",
    "title": "DocStringExtensions.isabstracttype",
    "category": "method",
    "text": "isabstracttype(t)\n\n\nIs the type t an abstract type?\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.isbitstype-Tuple{ANY}",
    "page": "Home",
    "title": "DocStringExtensions.isbitstype",
    "category": "method",
    "text": "isbitstype(t)\n\n\nIs the type t a bitstype?\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.keywords-Tuple{Any,Method}",
    "page": "Home",
    "title": "DocStringExtensions.keywords",
    "category": "method",
    "text": "keywords(func, m)\n\n\nReturns the list of keywords for a particular method m of a function func.\n\nExamples\n\nf(x; a = 1, b...) = x\nkws = keywords(f, first(methods(f)))\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.methodgroups-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "DocStringExtensions.methodgroups",
    "category": "method",
    "text": "methodgroups(func, typesig, modname; exact)\n\n\nGroup all methods of function func with type signatures typesig in module modname. Keyword argument exact = true matches signatures \"exactly\" with == rather than <:.\n\nExamples\n\ngroups = methodgroups(f, Union{Tuple{Any}, Tuple{Any, Integer}}, Main; exact = false)\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.parsedocs-Tuple{Module}",
    "page": "Home",
    "title": "DocStringExtensions.parsedocs",
    "category": "method",
    "text": "parsedocs(mod)\n\n\nParse all docstrings defined within a module mod.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.printmethod-Tuple{Base.AbstractIOBuffer{Array{UInt8,1}},Base.Docs.Binding,Any,Method}",
    "page": "Home",
    "title": "DocStringExtensions.printmethod",
    "category": "method",
    "text": "printmethod(buffer, binding, func, method)\n\n\nPrint a simplified representation of a method signature to buffer. Some of these simplifications include:\n\nno TypeVars;\nno types;\nno keyword default values;\n? printed where #unused# arguments are found.\n\nExamples\n\nf(x; a = 1, b...) = x\nsig = printmethod(Docs.Binding(Main, :f), f, first(methods(f)))\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.url-Tuple{Method}",
    "page": "Home",
    "title": "DocStringExtensions.url",
    "category": "method",
    "text": "url(m)\n\n\nGet the URL (file and line number) where a method m is defined.\n\nNote that this is based on the implementation of Base.url, but handles URLs correctly on TravisCI as well.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.Abbreviation",
    "page": "Home",
    "title": "DocStringExtensions.Abbreviation",
    "category": "type",
    "text": "Abbreviation objects are used to automatically generate context-dependent markdown content within documentation strings. Objects of this type interpolated into docstrings will be expanded automatically before parsing the text to markdown.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.DocStringTemplate",
    "page": "Home",
    "title": "DocStringExtensions.DocStringTemplate",
    "category": "type",
    "text": "The singleton type for DOCSTRING abbreviations.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.MethodList",
    "page": "Home",
    "title": "DocStringExtensions.MethodList",
    "category": "type",
    "text": "The singleton type for METHODLIST abbreviations.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.MethodSignatures",
    "page": "Home",
    "title": "DocStringExtensions.MethodSignatures",
    "category": "type",
    "text": "The singleton type for SIGNATURES abbreviations.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.ModuleExports",
    "page": "Home",
    "title": "DocStringExtensions.ModuleExports",
    "category": "type",
    "text": "The singleton type for EXPORTS abbreviations.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.ModuleImports",
    "page": "Home",
    "title": "DocStringExtensions.ModuleImports",
    "category": "type",
    "text": "The singleton type for IMPORTS abbreviations.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.TypeDefinition",
    "page": "Home",
    "title": "DocStringExtensions.TypeDefinition",
    "category": "type",
    "text": "The singleton type for TYPEDEF abbreviations.\n\n\n\n"
},

{
    "location": "index.html#DocStringExtensions.TypeFields",
    "page": "Home",
    "title": "DocStringExtensions.TypeFields",
    "category": "type",
    "text": "The singleton type for FIELDS abbreviations.\n\n\n\n"
},

{
    "location": "index.html#Reference-1",
    "page": "Home",
    "title": "Reference",
    "category": "section",
    "text": "Modules = [DocStringExtensions]\nOrder = [:constant, :function, :macro, :type]"
},

]}
