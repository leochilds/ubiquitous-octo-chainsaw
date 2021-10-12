## Technical Decisions

### Typescript
The choice to use Typescript over JavaScript was a simple one, the complexity of the application would lead to many errors. Type checking would at the very least cover many of the obvious ones, whilst also providing a great deal of self-documentation to make the codebase easier to read. 

### create-react-app
This seemed like a good place to start. Apart from editing a few existing projects, I haven't worked with react professionally. No need to make the task harder. Additionally, because of this it is likely there were easier ways to achieve some of the functionality I was going for. As an example, Redux is often used for state management, but as I haven't used this before, I decided for my own benefit to go without on this one. My next react project will certainly feature Redux, once I've committed to learning that also.

### Bootstrap
I'm familiar with bootstrap and it would save me a lot of time in styling and layout. Additionally, there are literally thousands of existing modifiable themes available online that provide a close approximate to almost any project. Furthermore, these themes can even prompt ideas for additional functionality and provide a skeleton to work off. Initially, when I started work I begin with w3.css just to keep things light, and later overhauled the whole project once I'd cut my teeth with the component management in a booking wizard.

### gh-pages
I considered carrying out an AWS deployment writing a CI/CD pipeline however as this was only a frontend application with functionality mocked, this felt like it would be overkill. As it was a requirement to use GitHub, gh-pages seemed like an obvious choice. Using the node package `gh-pages` its easy to deploy the build folder to the branch. 
