# Project Management

:::{danger}
I wrote this document while working in AnteMotion. I was leading 3 different teams at the time, and I needed to advise my team leaders on how to manage their work. This document contains several reference to our workflow, and
it is also specific for users of the Gitlab Community instance.

It is **not** a generic document.

**Viewer discrection is advised**

In time, I'll try to make it more generic.
:::

Adding a concise project-management handout gives readers a reusable playbook (_how we plan, prioritize, track, and communicate_). Engagements start faster, expectations stay aligned, and delivery risk drops. It keeps teams working from the same cadence (rituals, roles, artifacts) and helps new collaborators onboard quickly without reinventing process every time.

## Rationale

AnteMotion embraced **AGILE** mindset in the management of the projects and resources available.
The main reasons that led us to chose this kind of mindset can be summarized in the following reasons:

Flexibility and Adaptability
: Agile allows for frequent adjustments throughout the project, 
  responding to changes in market demand, customer feedback, and evolving requirements. This is especially 
  important in the the industry where AnteMotion is placing is products: it is crystal clear that customers
  have difficulties in define requirements, and things can change rapidly. Unfortunately, we must be fluid
  and embrace the fast changes.

Customer-Centric Development
: Agile emphasizes collaboration with customers, ensuring that the 
  product aligns with their needs. This means that we should stress a continuous feedback if possible.

Faster Time-to-Market
: Agile encourages iterative development, where work is divided into smaller 
  chunks or _sprints_. This should lead to faster releases of usable product features, allowing us to deploy 
  new functionality regularly.

Improved Collaboration and Communication
: Agile fosters a collaborative culture among developers, 
  project managers, and stakeholders. Doing regular stand-ups, retrospectives, and sprint reviews, communication 
  should be constant, and potential issues should be identified and addressed quickly.

Enhanced Product Quality
: Agile promotes frequent testing and integration, so that issues can be detected 
  and fixed early in the development cycle. The ongoing evaluation should allow us to deploy 
  higher-quality products.

Higher Team Morale
: Agile empowers teams by giving them ownership over their work, encouraging self-organization, 
  and fostering an environment where individuals can contribute ideas. This autonomy and focus on continuous improvement 
  often lead to higher morale and productivity.

Better Resource Management
: Agile helps in better allocating resources based on the immediate needs of 
  each sprint. Teams can quickly adjust workloads and priorities as necessary, ensuring that resources are used efficiently.

Transparency and Visibility
: One of the cornerstone of Agile is measuring the performance. This is a process 
  that require effort by the team, but provides greater visibility into the project's progress through regular reviews, 
  tracking tools, and clear deliverables. This transparency allows leadership to make more informed decisions about the 
  direction of the project.

---

## Embracing AGILE

### The AGILE Manifesto

:::{admonition} Manifesto for Agile Software Development
We are uncovering better ways of developing software by doing it and helping others do it. 
Through this work we have come to value:

 * **Individuals and interactions** over processes and tools
 * **Working software** over comprehensive documentation
 * **Customer collaboration** over contract negotiation
 * **Responding to change** over following a plan

That is, while _there is value in the items on the right_, we _value the items on the left more_.
:::

### The 12 Principles

The AGILE Manifesto is a document summarizes what the 12 AGILE principles try to describe in grater detail:

 1. **Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.**

    The core goal of Agile is to keep the customer happy. By delivering working software frequently, we can gather 
    feedback early, ensure we’re meeting customer needs, and **quickly pivot** if needed. This helps prevent costly 
    rework and ensures the product stays aligned with customer expectations.

    ```{warning}
    One should not confuse _adapting to change_ with _floating without a goal_
    ```

 1. **Welcome changing requirements, even late in development. Agile processes harness change for the customer's 
    competitive advantage.**

    Agile embraces change, recognizing that requirements often evolve over time. This principle encourages us 
    to stay flexible and adapt to new insights, market shifts, or evolving customer needs, even if these changes 
    arise late in the process. This makes the development process more responsive and relevant.

    And rest assured that in a field that is unripe as the ADAS/AV Simulation field, in a rapidly changing 
    European Automotive field, **requirements will change rapidly**

 1. **Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to 
    the shorter timescale.**

    Frequent releases create a rhythm that allows for continuous delivery and feedback. This practice ensures 
    that the we are always working on something valuable and reduce the risk of long development cycles that 
    might produce irrelevant or outdated software.

 1. **Business people and developers must work together daily throughout the project.**

    Close collaboration between business stakeholders and developers is essential for success. Constant communication 
    ensures that the team understands customer needs and that stakeholders are kept in the loop, reducing 
    misunderstandings and keeping priorities aligned. But at the same time business stakeholders that do not put trust or 
    do not listen to developers can easily damage the work in irreparable ways, both from a project and a team point
    of view.

 1. **Build projects around motivated individuals. Give them the environment and support they need, 
    and trust them to get the job done.**

    Empowered and motivated teams perform better. Providing the right resources, support, and autonomy allows team 
    members to use their creativity and expertise to solve problems and deliver high-quality software. 
    Trusting the team helps foster accountability and innovation. At the same time, developers must embrace
    responsibility and accountability of their decision and actions.

 1. **The most efficient and effective method of conveying information to and within a development team is 
    face-to-face conversation.**

    Direct communication (in person or via video calls) is the most effective way to resolve issues quickly 
    and share complex ideas. It avoids the misinterpretations that can arise from written communication, 
    especially when discussing intricate technical details or evolving requirements.

    But at the same time the principle recognize time as scarce resource. The principle should not be empowered 
    for the creation of useless meetings that deploy teams and developer of that resource.

    Like in the Manifesto, one should always consider the while _items on the left are valued more_, there is 
    still value in the items on the right: even if direct meeting are efficient for conveying information,
    this does not imply that we must avoid consolidating in design documents or protocols definitions.

 1. **Working software is the primary measure of progress.**

    Agile prioritizes delivering functional software over detailed documentation or processes. The focus is on creating 
    working solutions that provide real value to customers, and progress is measured by the functionality delivered 
    rather than milestones or meetings.

    Like in the Manifesto, one should always consider the while _items on the left are valued more_, there is 
    still value in the items on the right: even if working software is the main objective, without providing the
    customers documentation on how to use the software it will make it impossible to redistribute commercially.
    There is still value in documentation. 

    There is value also in code documentation: some turnover is physiological in all working environment. Code
    Documentation lower turnover costs.

 1. **Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain 
    a constant pace indefinitely.**

    Sustainable pace means avoiding burnout and ensuring the team can continue working at a steady speed without 
    overworking. This ensures long-term productivity and helps prevent high turnover or decreased morale. 
    It promotes a healthy work-life balance for all team members.

 1. **Continuous attention to technical excellence and good design enhances agility.**

    Prioritizing high-quality code and solid design principles enables teams to adapt more easily in the future. 
    If a project is built on a foundation of clean, maintainable code and best practices, it will be easier to 
    add features, fix bugs, or make changes without introducing instability.

    ```{warning}
    Taking the shorter route is only creating technical debt. And technical debt **always** bites you back.
    ```

 1. **Simplicity (the art of maximizing the amount of work not done) is essential.**

    Agile encourages simplicity in design and implementation, ensuring that only essential features are built. 
    By eliminating unnecessary features and avoiding complexity, teams can focus on delivering maximum value with 
    the least amount of effort, making the product easier to maintain and scale.

    This does not means that requirements are necessarily simple. And simplicity does not means that design
    is not technically excellent.

    ```{warning}
    It is easy to confuse _simplicity_ with _sloppiness_, which is a slippery slope.
    ```

 1. **The best architectures, requirements, and designs emerge from self-organizing teams.**

    Empowering teams to make decisions fosters creativity and ownership. When teams self-organize, they are more 
    invested in the outcomes, often producing better solutions. This principle encourages trust in the team’s 
    ability to solve problems and find the best solutions to meet user needs.

 1. **At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior 
    accordingly.**

    Continuous improvement is at the heart of Agile. Regular retrospectives provide an opportunity for teams to 
    reflect on what went well and what could be improved. This ensures that the team learns from each iteration, 
    continuously improving their processes and performance over time.

### TL;DR of AGILE Principles

* **Customer Focus**: Agile emphasizes customer satisfaction and adaptability to changing needs, ensuring the 
  product delivers what the customer truly values.
* **Collaboration**: Success is built on strong communication between business and technical teams, creating a 
  shared understanding of goals and challenges.
* **Simplicity and Efficiency**: By focusing on simplicity and only building what is necessary, teams maximize 
  their impact and reduce waste.
* **Empowerment and Trust**: Agile promotes trust in the team’s abilities and encourages self-organization, 
  fostering autonomy and motivation.
* **Sustainability**: Agile promotes sustainable development and ensures that teams can maintain productivity 
  over time without burnout.
* **Continuous Improvement**: Agile is an iterative process that encourages regular reflection and adjustment, 
  ensuring that teams continually evolve and improve.

```{seealso}
[AGILE Manifesto and the 12 Principles](https://agilemanifesto.org/).
The main resource for information is the [Agile Alliance](https://www.agilealliance.org/)
```

### The AGILE Approaches



SCRUM
: SCRUM is an Agile framework that organizes work into time-boxed iterations called sprints. It emphasizes 
  self-organizing teams, frequent feedback, and continuous improvement. Key elements include a Product Backlog, 
  Sprint Planning, Daily Stand-ups, Sprint Reviews, and Retrospectives to enhance adaptability and delivery.

Kanban
: Kanban is a visual Agile framework focused on optimizing workflow efficiency. It limits work in progress 
  (WIP) and promotes continuous delivery without fixed iterations. Tasks move through predefined stages on a 
  Kanban board, allowing teams to improve throughput, minimize bottlenecks, and respond flexibly to 
  changing priorities.

Extreme Programming (XP)
: Extreme Programming (XP) is an Agile methodology emphasizing high-quality software through frequent releases, 
  test-driven development (TDD), pair programming, and continuous integration. It fosters collaboration, 
  adaptability, and customer involvement, ensuring rapid feedback and code improvement throughout the 
  development process.

Feature-Driven Development (FFD)
: Feature-Driven Development (FDD) is an Agile methodology focused on delivering features in a structured, 
  iterative approach. It involves domain modeling, feature lists, and short design-build cycles. FDD 
  balances Agile flexibility with structured planning, making it ideal for larger teams needing a 
  scalable development approach.

Lean Software Development (LSD)
: Lean Software Development applies lean manufacturing principles to software, reducing waste, improving 
  flow, and maximizing customer value. It emphasizes eliminating inefficiencies, continuous learning, 
  and delivering small, frequent releases to improve adaptability and software quality.

Agile Unified Process (AUP)
: Agile Unified Process (AUP) is a streamlined version of the Rational Unified Process (RUP), incorporating 
  Agile principles. It structures development into disciplined phases—modeling, implementation, testing, 
  and deployment—while maintaining flexibility. AUP balances lightweight Agile practices with structured 
  workflows.

```{note}
The next chapters to go a little more in detail about each approach, 
so you can get a better understanding of how they work in practice and what are 
their main characteristics.
```

---

## SCRUM

SCRUM is an iterative and incremental Agile framework used for developing complex products, with a strong focus on 
delivering value through collaboration, adaptability, and continuous improvement. It is widely applied in software
development but also extends to other industries requiring flexibility and responsiveness.

It tries to introduce the following benefits

 - **Increased Transparency**: Regular inspections ensure alignment with goals.
 - **Faster Time-to-Market**: Short iterations lead to frequent releases.
 - **Flexibility**: Adapts to changes in priorities and market needs.
 - **Improved Collaboration**: Enhances team communication and stakeholder involvement.
 - **Higher Product Quality**: Continuous integration and testing reduce defects.
 
but everything comes to a cost. It is fundamental to be aware of the most prominent ones:

 - Teams must be highly disciplined and self-motivated.
 - Managing an evolving Product Backlog requires significant effort from the Product Owner.
 - Requires organizational commitment and cultural change.
 - Can be difficult to implement in rigid, hierarchical structures.

```{seealso}
You can read the full guide on [SCRUM online](https://scrumguides.org/scrum-guide.html)
```

### Core Principles of SCRUM

SCRUM is based on the following principles:

 * **Empirical Process Control**: Decisions are based on observation, experience, and experimentation.
 * **Iterative Development**: Work is divided into small, manageable increments called sprints.
 * **Collaboration**: Frequent communication and feedback loops ensure alignment between stakeholders.
 * **Time-boxing**: Fixed durations for meetings and development cycles to ensure predictability and efficiency.
 * **Self-organizing Teams**: Teams have the autonomy to determine the best way to accomplish their work.
 * **Continuous Improvement**: Regular reflection and adaptation drive progress and efficiency.

### SCRUM Roles

SCRUM defines three primary roles that ensure clarity in responsibilities:
 
 1. **Product Owner**
    
     - Defines and prioritizes the Product Backlog.
     - Represents the business and customer needs.
     - Ensures the development team understands the vision and goals of the product.
     - Collaborates closely with stakeholders.

 2. **SCRUM Master**

     - Facilitates the SCRUM process and ensures adherence to SCRUM principles.
     - Removes obstacles that hinder the team’s progress.
     - Coaches the team in Agile best practices.
     - Acts as a servant leader, promoting a culture of collaboration and transparency.

 3. **Development Team**

     - Consists of _cross-functional_ professionals responsible for delivering the product increment.
     - Self-organizes to determine the best way to complete work.
     - Ensures high-quality deliverables through continuous integration and testing.

### SCRUM Artifacts

SCRUM relies on three key artifacts:

 1. **Product Backlog**
    - A prioritized list of all features, enhancements, and fixes for the product.
    - Managed by the Product Owner and refined regularly.

    A possible template for a product backlog should contain:

    ```{admonition} Product Backlog Item Template
     * **Title**: Concise description of the feature or requirement
     * **Description**: A brief explanation of the functionality and purpose.
     * **User Story**: _As a [user role], I want [goal] so that [reason]._. There may be more
       than one user story in the template
     * **Acceptance Criteria**: a list of elements to be objectively fullfilled in order to
       define the backlog item as complete.
     * **Priority: [High / Medium / Low]**
     * **Estimate: [Story Points / Time Estimate]**: the estimate can be defined in several
       scales and it is not strictly needed to be in time. One popular choice is to use 
       _story points_ in place of _working hours_. Story points are units of measure for expressing
       an estimate of the overall effort required to fully implement a task. Points encapsulate
       work complexity, working hours required, risk and uncertainty.
     * **Dependencies:** link to related PBIs or external dependencies
     * **Notes**: any additional information, constraints, or considerations.
    ```

 2. **Sprint Backlog**
    - A subset of the Product Backlog selected for a specific sprint.
    - Created by the Development Team based on their capacity and sprint goals.

 3. **Increment**
    - The sum of all completed work in a sprint that meets the Definition of Done.
    - Must be in a deployable state at the end of each sprint.

### The art of Estimate: Story Points

```{seealso}
This section is inspired by an Atlassian Blog Post on 
[Estimates](https://www.atlassian.com/agile/project-management/estimation)
```

Traditional software teams give estimates in a time format: days, weeks, months. Many agile teams, 
however, have transitioned to story points. Story points are units of measure for expressing an estimate 
of the overall effort required to fully implement a product backlog item or any other piece of work. 
_Teams assign story points relative to work complexity, the amount of work, and risk or uncertainty._
Values are assigned to more effectively break down work into smaller pieces, so they can address uncertainty. 
Over time, this helps teams understand how much they can achieve in a period of time and builds 
consensus and commitment to the solution.  

It may sound counter-intuitive, but this abstraction is actually helpful because it pushes the team to 
make tougher decisions around the difficulty of work. Here are few reasons to use story points:

 * Dates don’t account for the non-project related work that inevitably creeps into our days: 
   emails, meetings, and interviews that a team member may be involved in.
 * Dates have an emotional attachment to them. Relative estimation removes the emotional attachment.
 * Each team will estimate work on a slightly different scale, which means their velocity (measured in points) 
   will naturally be different. This, in turn, makes it impossible to play politics using velocity as a weapon.

Once you agree on the relative effort of each story point value, you can assign points quickly without much debate. 
Story points reward team members for solving problems based on difficulty, not time spent. This keeps team 
members focused on shipping value, not spending time. 

```{warning}
**Unfortunately, story points are often misused**. Story points go wrong when they’re used to 
judge people, assign detailed timelines and resources, and when they’re mistaken for a measure 
of productivity. Instead, **teams should use story points to understand the size of the work 
and the prioritization of the work**.
```

```{seealso}
Teams starting out with story points use an exercise called 
[planning poker](https://www.atlassian.com/blog/platform/scrum-poker-for-agile-projects)
```

### SCRUM Events

SCRUM includes structured events to ensure transparency, inspection, and adaptation:

 1. **Sprint Planning**
    - Held at the start of a sprint.
    - Determines the work that will be completed in the upcoming sprint.
    - Involves the Product Owner, SCRUM Master, and Development Team.

 2. **Daily SCRUM (Stand-up)**
    - A 15-minute time-boxed meeting held every day.
    - Focuses on progress updates and identifying roadblocks.
    - Each team member answers:
      - What did I complete yesterday?
      - What will I work on today?
      - Are there any impediments blocking my progress?

 3. **Sprint Review**
    - Held at the end of the sprint.
    - Demonstrates the completed increment to stakeholders.
    - Gathers feedback for future improvements.

 4. **Sprint Retrospective**
    - Conducted after the Sprint Review.
    - Reflects on the sprint process and identifies opportunities for improvement.
    - Helps the team refine their workflow for the next sprint.

### Sprint Lifecycle

A sprint is a time-boxed iteration (typically 1-4 weeks) during which the Development Team works on a prioritized 
set of backlog items. The cycle follows these steps:

1. Sprint Planning
2. Daily SCRUM meetings
3. Development and continuous integration
4. Sprint Review
5. Sprint Retrospective
6. Backlog refinement for the next sprint

### Best Practices for Implementing SCRUM
 
 - **Ensure Executive Buy-in**: Management must support Agile transformation.
 - **Invest in Training**: Teams should understand Agile principles and SCRUM mechanics.
   (which is why I'm writing this document...)
 - **Foster a Culture of Continuous Improvement**: Use retrospectives effectively.
 - **Empower Teams**: Encourage self-organization and accountability.
 - **Use Agile Tools**: Leverage software like Jira, Azure DevOps, or Trello to track progress.
 - **Maintain a Refined Backlog**: Keep the backlog well-organized and prioritized.

```{warning}
While team shall not confuse `adapt to changes` with `chaos`, is the task of
the Product Owner to keep the Product Backlog clear and prioritized at all times.
The Product Owner must ensure that changes are made only when they add value to 
the project, and protect it from `chaos`.
```

---

## Kanban

Kanban is an Agile framework that emphasizes visualizing work, limiting work in progress (WIP), and optimizing flow. 
Unlike SCRUM, which follows structured time-boxed iterations, Kanban operates as a continuous delivery system that 
dynamically adjusts to changing priorities. Originally developed in manufacturing by Toyota, Kanban has since been 
widely adopted in software development, IT operations, and business process management.

Kanban offers several advantages for teams:
 
 - **Increased Efficiency**: Reduces idle time and optimizes resource utilization.
 - **Flexibility**: Easily adapts to changing priorities without disrupting workflow.
 - **Improved Transparency**: Provides a clear view of work progress.
 - **Faster Delivery**: Continuous flow enables quicker releases compared to time-boxed iterations.
 - **Better Collaboration**: Encourages real-time communication and process alignment.

Despite its benefits, also presents some challenges:

 - **Lack of Time-boxing**: Teams without clear deadlines may struggle with predictability.
 - **Requires Discipline**: WIP limits must be strictly enforced for optimal performance.
 - **Can Become Overly Complex**: Excessive customization of workflows can reduce effectiveness.

```{seealso}
If you need more, you can check out [The Kanban University](https://kanban.university/kanban-guide/)
```
            
### Core Principles of Kanban

Kanban is guided by six core principles that help teams improve efficiency and effectiveness:

 1. **Visualize Work**: Use a Kanban board to represent work items, making the workflow transparent and easy to track.
 2. **Limit Work in Progress (WIP)**: Restrict the number of tasks in progress at any given time to avoid bottlenecks 
    and improve focus.
 3. **Manage Flow**: Monitor how work moves through the system, identifying inefficiencies and optimizing throughput.
 4. **Make Process Policies Explicit**: Clearly define rules for how work is handled and progressed.
 5. **Implement Feedback Loops**: Conduct regular reviews to assess workflow efficiency and make necessary adjustments.
 6. **Improve Collaboratively**: Use empirical data and team insights to drive continuous improvement.

### Kanban Board

A kanban board is a visual display of cards that represent the work items in a kanban system. Typically, 
boards are arranged in vertical columns that represent activities. Some boards use horizontal swimlanes 
to further enhance the visualization of policies, types of work, classes or service, or other attribute 
that is important for the management of the work. Additional dimensions may be represented by color or other 
card attributes. **Cards should move rightward from column to column** as the work items they represent progress 
through the system. Work in progress limits and other policies may be represented visually.

A basic board consists of columns that represent workflow states:

 * **Backlog**: Items waiting to be addressed.
 * **To Do**: Tasks that are ready to be started.
 * **In Progress**: Tasks actively being worked on.
 * **Review / Testing / Delivering**: Items under validation or quality checks.
 * **Done**: Completed tasks.

Kanban boards can be either **physical** or **digital**.

### Work in Progress (WIP) Limits

One of the key features of Kanban is setting **WIP limits** to prevent teams from overloading themselves with too 
many concurrent tasks. WIP limits are policies established for each column on the Kanban board, ensuring that 
work moves smoothly without bottlenecks. It is not unusal to apply WIP Limits also for team individuals to
ensure that they do not take on too much work and risk burnout. 
The application of them provides several benefits in the long term:

 - Reduces task switching and increases focus.
 - Prevents system overloads and improves workflow efficiency.
 - Enhances collaboration by ensuring tasks are completed before new ones are started.

Examples of WIP Limits are:

 - **Development Team WIP Limit:** A team of five developers might set a WIP limit of 5 for the "In Progress" column, 
   ensuring no more than seven tasks are worked on simultaneously.
 - **Testing WIP Limit:** A QA team may impose a WIP limit of 3 in the "Testing" column to ensure that quality assurance 
   is not overwhelmed, maintaining focus on resolving issues before moving forward.

### Managing Flow in Kanban

Flow management in Kanban aims to ensure that work progresses steadily through the system without unnecessary delays. 
Techniques to optimize flow include:

- **Measuring Lead Time**: The time taken for a task to move from start to completion.
- **Measuring Cycle Time**: The time taken from when a task starts execution to when it is completed.
- **Review Bottlenecks**: Areas where work is piling up, causing delays, should be visible on the board.
- **Using Cumulative Flow Diagrams (CFD)**: A visual representation of how work items move through the system.

### Kanban Events

Unlike SCRUM, which has predefined ceremonies, Kanban encourages flexible but structured meetings to review and 
improve processes.

 1. **Daily Stand-ups**
     - Short daily meetings to discuss task progress, blockers, and next steps.
     - Helps maintain team alignment and identify workflow issues.

 2. **Replenishment & Commitment Meetings**
     - Held when backlog items need to be selected for the **To Do** column.
     - Ensures that high-priority work is addressed first.

 3. **Review Meetings**
     - Conducted periodically to assess completed work and gather stakeholder feedback.
     - Helps refine process policies and adjust priorities.

 4. **Retrospective Meetings**
     - Focuses on evaluating the effectiveness of the Kanban system.
     - Identifies opportunities for process improvement.

### Work Item Template

To maintain consistency and clarity in Kanban, teams can use a standard template for work items:

```{admonition} Work Item Template
 * **Title:** Concise task name
 * **Description:**: Brief explanation of the task, including its purpose and objectives.
 * **Acceptance Criteria:**  
    - Define clear conditions for completion.
    - Ensure testable and verifiable outcomes.
 * **Priority:**: High / Medium / Low
 * **Assignee:** Team member responsible
 * **Estimated Effort:** Story Points / Hours (see [this](#the-art-of-estimate-story-points) section)
 * **Dependencies:** Any related tasks or blockers
 * **Notes:** Additional comments or considerations
 * **Status:** not explicitly on the work item, but implicitly defined by its location on the board
```

### Best Practices for Implementing Kanban

To successfully implement Kanban, teams should follow best practices:

 - **Start with the Existing Process**: Introduce Kanban gradually without drastic workflow changes.
 - **Define WIP Limits Clearly**: Avoid overloading team members by setting realistic WIP limits.
 - **Encourage Continuous Improvement**: Use retrospectives and feedback loops to refine the system.
 - **Use Digital Kanban Tools**: Leverage software tools for tracking and analytics.
 - **Ensure Team Buy-in**: Educate team members on Kanban principles to drive adoption.

---

## Extreme Programming (XP)

Extreme Programming (XP) is an Agile software development methodology focused on engineering excellence, 
continuous feedback, and rapid iteration. XP promotes collaboration, flexibility, and high-quality software 
by emphasizing frequent releases, test-driven development (TDD), and close customer involvement.

Application of extreme programming should provide the following benefits

 - **Higher Code Quality** – TDD and pair programming reduce bugs and improve maintainability.
 - **Faster Feedback Loop** – Small releases allow quick customer feedback.
 - **Increased Collaboration** – Encourages teamwork and shared ownership.
 - **Improved Flexibility** – Easily adapts to changing requirements.

But nothing comes without some sacrifice:

 - Requires a _high level_ of discipline to follow XP practices consistently.
 - Can be difficult to adopt in teams resistant to pair programming and frequent testing.
 - On-site customer involvement may not always be feasible.

```{seealso}
The official webpage of the [XP Movement](http://www.extremeprogramming.org) describes
more about the methodology
```

### Core Principles of XP

XP is based on five core values:

 1. **Communication** – Frequent communication within the team and with stakeholders ensures clarity and transparency.
 2. **Simplicity** – Prioritize the simplest solution that meets the requirements.
 3. **Feedback** – Continuous feedback through testing and customer reviews improves the product and process.
 4. **Courage** – Developers should be open to refactoring, adopting changes, and addressing problems early.
 5. **Respect** – Teams work collaboratively, valuing each member’s contributions and expertise.

```{seealso}
[XP Values](http://www.extremeprogramming.org/values.html) in details
```

### Key Practices of XP

XP defines several engineering and management practices that help teams deliver high-quality software efficiently:

 1. **Pair Programming**
     - Two developers work together at one workstation, writing and reviewing code in real time.
     - Improves code quality and **knowledge sharing**.

 2. **Test-Driven Development (TDD)**
     - Developers write unit tests before writing the actual code.
     - Ensures code correctness and facilitates refactoring.
     - Forces the design of the public interfaces of the code before actually implementing it.

 3. **Continuous Integration (CI)**
     - Developers integrate code frequently (at least daily) into a shared repository.
     - Automated tests validate each integration, reducing integration issues.

 4. **Small Releases**
     - XP teams deliver working software frequently (every 1-3 weeks).
     - Allows rapid customer feedback and quick adjustments.

 5. **Refactoring**
     - Code is continuously improved for maintainability without changing functionality.
     - Eliminates technical debt and prevents software rot.

 6. **Simple Design**
     - The simplest design that works is preferred.
     - Reduces complexity and improves maintainability.

     ```{note}
     In XP, simplicity is the combination of 4 subjective quantities:
     Testable, Understandable, Browasable, Explainable (`TUBE`).
     Another popular approach is `Once and Only Once`: express all
     the intention of your code **even if it means duplication**.
     ```

 7. **Collective Code Ownership**
     - Any developer can modify any part of the codebase.
     - Encourages knowledge sharing and reduces dependency on individuals.

 8. **Coding Standards**
     - Teams follow consistent coding styles to ensure readability and maintainability.
     - Prevents unnecessary complexity and inconsistencies.

 9. **On-Site Customer**
     - A customer representative is embedded in the team to provide constant feedback.
     - Reduces misinterpretations of requirements and improves satisfaction.

 10. **Sustainable Pace**
     - Teams avoid excessive overtime to maintain productivity and prevent burnout.

### XP Lifecycle

XP follows a structured development cycle with frequent iterations:
 
 1. **Planning** – The team collaborates with the customer to define user stories and estimate effort.
 2. **Iteration** – Developers implement and test features in small increments.
 3. **Release** – Completed features are delivered frequently.
 4. **Review & Adaptation** – Feedback is gathered and applied to future iterations.

### Best Practices for Implementing XP

 - Train teams in XP principles and techniques before adoption.
 - Automate testing and continuous integration to support rapid iteration.
 - Foster a culture of collaboration and encourage knowledge sharing.
 - Balance XP practices with team dynamics and project requirements.

### Test Driven Development

```{seealso}
Taken from the 
[Code Unit Test First](http://www.extremeprogramming.org/rules/testfirst.html) in XP website
```

When you create your tests first, before the code, you will find it much easier and faster to create your code. 
The combined time it takes to create a unit test and create some code to make it pass is about the same as just 
coding it up straight away. But, if you already have the unit tests you don't need to create them after the code 
saving you some time now and lots later.

Creating a unit test helps a developer to really consider what needs to be done. Requirements are nailed down 
firmly by tests. There can be no misunderstanding a specification written in the form of executable code.
You also have immediate feedback while you work. All test running correctly is Definition of Done.

By creating tests first your design will be influenced by a desire to test everything of value to your customer. 
Your design will reflect this by being easier to test.

There is a rhythm in TDD. You create one test to define some small aspect of the problem at hand. Then you create 
the simplest code that will make that test pass. Then you create a second test. And so on.

### Pair Programming Idioms

```{seealso}
Unshamely stolen from the 
[Some Pair Programming Idioms](http://www.extremeprogramming.org/stories/pair.html)
on XP website
```

 1. **Your Baby is Ugly.** You need to be able to tell your pair partner the truth. Some of the best partners argue 
    much of the time. You loose many of the benefits of working together if you feel like you can't say when something 
    is bad. Make a deal to always be honest even if your partner has seniority or is a higher rank.
 2. **That Isn't What I Said.** What you are saying isn't being understood by your partner. Switch to a different mode 
    of explanation by taking over the keyboard or moving away from the computer completely. And invite them to a whiteboard!
 3. **Let's Try Your Idea First.** You have two perfectly good ideas but you are arguing about which is better. Break the 
    stale mate by agreeing to try your partner's idea first.
 4. **None of the Above.** You are arguing about your ideas and both of you are convinced you are right. Neither of you is 
    willing to apply **Let's Try Your Idea First**. You can agree to throw away both ideas and find a third idea that may 
    end up being a hybrid or completely new. Often the third idea is much better than either.
 5. **Brick to the Head.** Your partner is convinced he knows something is true but you know it is false. Do not actually 
    use a brick, instead write the simplest experiment or prototype to get your partner's thoughts unstuck. 
 6. **I Am Cutting You Off Now.** It is hard to abandon something that has almost worked perfectly for the last hour. 
    Just one more small change it will work, then one more after that... One of you must see the sense in throwing it 
    away and starting over fresh. Even if you can obviously fix it with just one more little change.
 7. **No Backseat Driving.** The person at the keyboard is allowed to make mistakes. Don't point out small errors until 
    the driver completes typing out his thoughts and pauses to look over what has been typed. Even then you should wait 
    a bit to see if the mistake gets fixed. Keep your thoughts on the bigger picture and let the driver worry over details.
 8. **Remember the Rules.** It is easy to get caught up in writing code and forget the rules. One of you must keep your 
    wits about you and remind the other to follow the rules.
 9. **It Isn't a Race.** If you are wailing away on the keyboard and text is jumping from here to there and the whole time 
    your partner is lost then you need to slow down. Try using the mouse more to help you slow down and keep your 
    partner in the loop.
 10. **Ping-Pong.** If you find one of the two of you stops paying attention split the responsibilities by letting one 
     programmer write the tests while the other writes the code.

---

## Feature-Driven Development (FFD)

```{warning}
Since difficult to apply on small size teams, FDD is not described in detail
and only major points are mentioned here.
```

Feature-Driven Development (FDD) is an Agile methodology that emphasizes designing and building 
software around **features**. It combines iterative development with a structured framework that 
helps manage large and complex projects. FDD ensures **frequent, tangible progress** by focusing on 
small, client-valued functions.

Benefits of FDD:

 - **Scalability** – Well-suited for large teams and enterprise systems.
 - **Frequent Deliverables** – Features are delivered in short cycles.
 - **Improved Code Quality** – Peer reviews and strong design practices enhance quality.
 - **Clear Ownership** – Assigning responsibility to feature and class owners reduces confusion.

Challenges of FDD:

 - **Requires Upfront Domain Modeling** – Initial investment in modeling is complex and time-consuming.
   This implies that the methodology is less robust with respect to requirements changes while modeling
   the core of the project, in particular in its initial phases.
 - **Not Ideal for Small Teams** – FDD’s structure suits medium to large projects better, because requires
   several specific modeling actors for the team.
 - **Less Emphasis on Customer Collaboration** – Compared to SCRUM, FDD is more internally focused.
 - **A MetaModeling language may be required** - Teams must be trained on the selected language (e.g., UML)

### Core Principles of FDD

FDD is based on five key principles:

 1. **Domain Modeling** – Creating a comprehensive model of the business domain.
 2. **Developing by Feature** – Incremental implementation of small, valuable functionalities.
 3. **Component Ownership** – Assigning responsibility for specific components to individuals.
 4. **Regular Builds** – Frequent integrations to maintain working software.
 5. **Inspections & Quality Assurance** – Ensuring high quality through peer reviews and testing.

### The FDD Process

FDD follows a structured five-step process:

 1. **Develop an Overall Model**
     - Analyze business needs and create a high-level domain model.
     - Collaborative workshops with domain experts and stakeholders.
     - Identify major components and their relationships.

 2. **Build a Feature List**
     - Features represent **small, client-valued functionalities** (e.g., "Calculate invoice total").
     - Each feature should be completed in **less than two weeks**.
     - Organized into feature groups based on business processes.

 3. **Plan by Feature**
     - Assign features to development teams.
     - Estimate effort and prioritize work.
     - Establish dependencies between features.

 4. **Design by Feature**
     - Design each feature before implementation.
     - Use design patterns and best practices.
     - Conduct peer reviews to validate designs.

 5. **Build by Feature**
     - Implement, test, and integrate one feature at a time.
     - Conduct code reviews and unit tests.
     - Ensure seamless integration into the existing system.

### Feature Definition in FDD

A **feature** in FDD follows the format:

```{admonition} Feature Template
**"[Action] the [result] for a [business entity]."**  

Example: _"Validate the payment details for an order."_
```

### Roles in FDD

FDD defines specific roles which are required to manage the project:
 
 - **Project Manager** – Oversees overall progress and resource allocation.
 - **Chief Architect** – Defines high-level system architecture.
 - **Development Manager** – Coordinates feature development efforts.
 - **Feature Owners** – Responsible for the design and development of assigned features.
 - **Class Owners** – Owns specific components of the system.

### Best Practices for Implementing FDD

 - Keep features small and valuable.
 - Encourage collaboration between developers and domain experts.
 - Use automation for regular builds and testing.
 - Maintain strict code ownership and accountability.
 - Ensure frequent integration to prevent technical debt.

---

## Lean Software Development (LSD)

Lean Software Development (LSD) is an Agile methodology inspired by Lean Manufacturing principles from Toyota. 
It focuses on the concept of waste elimination, through workflow optimization. LSD emphasizes continuous improvement, 
rapid feedback, and a culture of learning, making it highly adaptable for software teams.

LSD is guided by seven key principles:

 1. **Eliminate Waste** – Remove unnecessary work that does not add value.
 2. **Amplify Learning** – Encourage rapid experimentation, feedback, and iteration.
 3. **Decide as Late as Possible** – Delay decisions until sufficient data is available.
 4. **Deliver as Fast as Possible** – Reduce cycle times to accelerate value delivery.
 5. **Team is Driving** – Encourage autonomy, ownership, and decentralized decision-making.
 6. **Build Integrity In** – Ensure software quality through continuous testing and refactoring.
 7. **Optimize the Whole** – Focus on the entire system, not just individual processes.
 8. **Use Lean Metrics** – Track lead time, cycle time, and defect rates to identify bottlenecks.

It is important to understand what is considered waste in LSD: it refers to anything that does not contribute 
directly to customer value. Common types of waste include:

 - **Partially Done Work** – Features that are developed but not deployed.
 - **Extra Processes** – Unnecessary documentation, approvals, or steps.
 - **Task Switching** – Constantly shifting focus leads to inefficiency.
 - **Waiting Time** – Delays due to dependencies, reviews, or computational time on personal machines
 - **Overproduction** – Building features before they are needed.
 - **Unutilized Talent** – Not leveraging team members’ full potential and capabilities.

LSD applies several practices to improve efficiency and software quality:

 1. **Automated Testing, Continuous Integration, Continuous Delivery & Deployment**
     - Ensures that code changes are frequently tested.
     - Helps maintain high-quality software while delivering fast iterations.
     - Automates software delivery to minimize delays.
     - Reduces the risk of integration issues by deploying in small, incremental changes.
 2. **Set-Based Development (Decide Late)**
     - Multiple design options are considered before making final decisions.
     - Flexibility is encouraged (adapts to emerging information).
 3. **Small Batch Sizes & Fast Feedback**
     - Encourages smaller, incremental releases.
     - Enables rapid feedback from users and stakeholders.
 7. **Customer Collaboration & Pull Systems**
     - Work is prioritized based on customer demand (pull system).
     - Features are built only when needed, reducing overproduction.

---

## Agile Unified Process (AUP)

Agile Unified Process (AUP) is a streamlined version of the Rational Unified Process (RUP - Rational Software Corporation was an IBM division) that integrates Agile principles. It balances **structured development** with the **flexibility of Agile**, making it suitable for teams that require a **disciplined yet adaptable** approach. Its principles include:

 1. **Iterative and Incremental Development**: Work is delivered in small, iterative cycles for continuous improvement.
 2. **Model-Driven Approach**: Lightweight modeling ensures better planning and documentation.
 3. **Agile Flexibility**: Adapts to changing requirements while maintaining discipline.
 4. **Continuous Integration and Testing**: Frequent builds and automated testing improve software quality.
 5. **Stakeholder Collaboration**: Continuous involvement of stakeholders ensures alignment with business needs.

AUP follows a structured **lifecycle approach**, consisting of the following four phases:

 1. **Inception**
     - Defines the project vision, goals, and feasibility.
     - Identifies stakeholders and key requirements.
     - Establishes initial architecture and high-level planning.
 2. **Elaboration**
     - Further refines architecture and identifies major risks.
     - Develops a working prototype or proof of concept.
     - Estimates effort and resources required for development.
 3. **Construction**
     - Implements functional features in small increments.
     - Uses Agile practices like continuous integration and test-driven development (TDD).
     - Ensures working software is delivered at the end of each iteration.
 4. **Transition**
     - Prepares the system for deployment.
     - Conducts final testing, user training, and documentation.
     - Moves the software to production.

---

## Unit of Work: User Stories, Features, Epics, and Milestones

In Agile development, breaking down work into manageable pieces is essential for maintaining efficiency and adaptability. To achieve 
this, teams categorize their work into **user stories, features, epics, and milestones**, each serving a distinct purpose in product 
development. 

While user stories focus on small, incremental value, features represent broader system capabilities, and epics encompass large, 
complex initiatives that require extensive development efforts. 

Milestones, on the other hand, serve as checkpoints that indicate significant progress or achievements in a project.

### User Stories

User stories are the fundamental building blocks of Agile development. They describe a specific requirement from the end-user’s 
perspective and emphasize **functionality that delivers value**. Unlike traditional requirements, which tend to be technical and 
detailed, user stories are intentionally concise and designed to foster discussions within the development team.

A good user story follows a simple structure:  

```{admonition} Example
_**As a [user], I want [goal] so that [benefit].**_
```

For example:  

```{admonition} Example
_As a customer, I want to reset my password so that I can regain access to my account if I forget it._
```

This structure ensures that user stories remain focused on the **who, what, and why** of a requirement. They are intentionally small, 
allowing for completion within a single sprint. Additionally, user stories should always be **testable**, meaning that clear acceptance 
criteria should define when the story is considered done. For example:

```{admonition} Example
 * The system must allow the user to request a password reset.
 * A reset link must be sent via email.
 * The user must be able to set a new password using the link.
```

Well-defined user stories help maintain a user-centric approach to development and encourage continuous feedback, ensuring that 
the product meets user expectations.

### Features

A feature is a collection of related user stories that work together to deliver a meaningful piece of functionality. While a user 
story represents a small unit of value, a feature provides a more substantial enhancement to the system. Features are often too 
large to be completed within a single sprint, but they should still be **deliverable within a few iterations**.

```{admonition} Example
The **password management feature** include several user stories, such as:

 * A user can reset their password via email.
 * A user can update their password from their account settings.
 * A user is required to set a strong password that meets security criteria.
```

Features provide a middle ground between user stories and epics. They help structure development work so that teams can focus 
on delivering incremental improvements without losing sight of the bigger picture. Features should still be 
**specific, testable, and valuable to users** while ensuring that the work remains manageable for development teams.

### Epics

Epics are large bodies of work that cannot be completed in a single iteration or even a few sprints. They typically represent 
high-level business objectives or major initiatives that span multiple features. Epics are **broken down into smaller features 
and user stories** to make development more manageable.

```{admonition} Example
The Epic titled **“Improve User Security”** may contain multiple features, such as:

 * Two-factor authentication for user accounts.
 * Secure password management (with related user stories about password reset and strength enforcement).
 * Suspicious activity detection and alerting.
```

While epics define strategic goals, they remain flexible and adaptable. As development progresses and teams gain 
feedback, epics can be refined, expanded, or even split into multiple smaller initiatives. This flexibility ensures 
that teams can continuously align their work with evolving business needs.

### Milestones

Milestones are significant checkpoints in a project. Unlike user stories, features, or epics, which focus on deliverables, milestones focus on **achievements and progress tracking**.

#### How Milestones Work
Milestones serve as **reference points** that indicate when a major goal, phase, or critical feature set has been completed. They are often tied to:
- The completion of a major feature or group of features.
- A product release or deployment.
- A major business decision, such as funding rounds or market launches.
- Compliance with regulatory requirements or security audits.

For example, a milestone in a security improvement initiative might be:
**“Complete two-factor authentication implementation and full security audit by Q2.”**

#### Why Milestones Matter in Agile

Milestones are essential in Agile development because they:
- Provide a **sense of progress** and motivation for the team.
- Help **align stakeholders** by offering a clear roadmap of key achievements.
- Assist in **managing risks** by identifying critical dependencies.
- Support **effective planning** by structuring high-level business goals.

Unlike traditional project management, where milestones dictate rigid deadlines, Agile milestones remain **flexible and adaptive**, adjusting based on user feedback and evolving priorities.

### User Stories, Features, Epics, and Milestones

To effectively manage user stories, features, epics, and milestones, Agile teams follow a few guiding principles.

For user stories, it’s crucial to maintain **clarity and focus on user value**. The INVEST principle is often used as a guideline:
- **Independent**: The story should be self-contained.
- **Negotiable**: It should be adaptable based on discussion.
- **Valuable**: It must provide value to the user.
- **Estimable**: The team should be able to size it.
- **Small**: It should be achievable within a sprint.
- **Testable**: Acceptance criteria should verify completion.

Features, on the other hand, should ensure **cohesion between related stories** while maintaining a clear business objective. They should 
align with customer needs and allow for incremental delivery, avoiding excessive complexity that delays release cycles.

Epics should focus on **broad business objectives** without getting lost in excessive detail. Instead of trying to define all requirements 
up front, teams should continuously refine epics by splitting them into smaller, actionable features and user stories over time.

Milestones should be **strategic yet flexible**, serving as meaningful checkpoints rather than rigid deadlines. They should align with 
the **broader vision of the project**, helping teams maintain a clear direction while staying adaptable.

---


## Measure to understand: Key Metrics

```{warning}
It must be kept in mind that metrics exist to understand **work processes** and not
evaluate **developer efforts**. We must _always_ remember our driving principles, and in particular
for this topic the **Sustainability principle**.

A good _team leader_ makes the metrics as anonymous as possible.
```

### Velocity

 - **What It Measures:** Velocity tracks the amount of work a team completes in a single iteration, usually measured 
   in story points, hours, or completed user stories.
 - **How It Is Measured:** At the end of each sprint, the total completed story points are recorded. Over multiple 
   sprints, an average velocity is calculated to predict future performance. Sometimes may be helpful to show
   both commitment and delivered story points. Must be noted that other elements may be used in place of stories to
   estimate the velocity.
 - **Why It Is Useful:** Velocity helps teams **forecast delivery timelines**, ensuring realistic sprint planning. 
   It provides insights into team productivity and helps identify fluctuations that may indicate process inefficiencies.

### Lead Time

 - **What It Measures:** Lead time measures the total time taken for a work item to move from creation to completion.
 - **How It Is Measured:** It is calculated from the moment a work item (e.g., a user story or feature) is added to 
   the backlog until it is delivered.
 - **Why It Is Useful:** Lead time highlights **process efficiency** and identifies bottlenecks. Shorter lead times 
   indicate a streamlined workflow, enabling faster delivery of customer value. Sometimes, however, there are features
   that remains in backlog for a very long time, waiting for a customer to actively request for it. In that case, lead
   time may be misleading with respect to the actual element that it tries to measure. If this situation is common in
   the project, it is better to use Cycle Time as metric.

### Cycle Time
 
 - **What It Measures:** Cycle time tracks how long a task takes from the moment work begins to its completion.
 - **How It Is Measured:** It is calculated from the time a task moves to an “In Progress” state until it reaches “Done.”
 - **Why It Is Useful:** Lower cycle times indicate a **faster development process**. Monitoring cycle time helps 
   teams optimize work efficiency and improve throughput.

### Cumulative Flow Diagram (CFD)

 - **What It Measures:** CFD visualizes work-in-progress across different workflow states over time.
 - **How It Is Measured:** A chart is created with time on the x-axis and the number of tasks in various states 
   (To Do, In Progress, Done) on the y-axis.
 - **Why It Is Useful:** CFD helps identify bottlenecks, work imbalances, and process stability. If a particular 
   workflow state grows disproportionally, it signals a problem needing resolution. Further it provides additional 
   important approximate metrics such as the average Cycle Time, and the Average Throughput.

```{figure} images/pm/cfd-graph.svg
:align: center
:alt: Cumulative Flow Diagram

An example of a Cumulative Flow Diagrams
```

### Burnup and Burndown Chart

 - **What It Measures:** Burnup charts track the amount of completed work against the total planned scope, while Burndown 
   shows the amount of remaining work in a sprint.
 - **How It Is Measured:** In Burnup, a line plots total work, and a second line project the completed work versus the 
   ideal trajectory (the line from origin to sprint deadline). The graph is updated over time. If the total works continue to
   increase, we are observing scope creep. Burndown is the distance (or area) between the total work and the completed work.
   Sometimes, a Burndown graph is directly used as marketing material: in that case it is usually pltted as a decreasing line.
 - **Why It Is Useful:** Burnup charts provide visibility into project scope changes, helping teams manage expectations 
   and avoid scope creep. Burndown offers real-time tracking of progress and helps teams identify if they are on track 
   or at risk of missing deadlines.

```{figure} images/pm/bup-graph.svg
:align: center
:alt: Burnup Diagram

An example of a Burn Up Charts
```

### Escaped Defects

 - **What It Measures:** Escaped defects track the number of bugs found in production after release.
 - **How It Is Measured:** Count the defects discovered by users or reported after deployment.
 - **Why It Is Useful:** A high number of escaped defects indicates **insufficient testing** or quality control. 
   Reducing them improves software reliability and user satisfaction.

### Code Coverage
 
 - **What It Measures:** Code coverage determines how much of the codebase is tested by automated tests.
 - **How It Is Measured:** A percentage is calculated by dividing the number of executed test cases by the total 
   possible cases.
 - **Why It Is Useful:** High code coverage should ensure **better test reliability**, reducing the risk of undetected 
   bugs and increasing confidence in releases. In practice, this is not always true, and while we should strive for a 
   good coverage, the real impacting metrics should be on coverage of the critical sections.

### Customer Satisfaction (CSAT/NPS)

 - **What It Measures:** Customer Satisfaction (CSAT) and Net Promoter Score (NPS) measure user happiness with the product.
 - **How It Is Measured:** CSAT is gathered via surveys (e.g., “Rate your experience 1-5”), while NPS measures loyalty 
   based on “How likely are you to recommend?” (scale 0-10).
 - **Why It Is Useful:** These metrics provide **direct feedback from users**, helping teams improve features, fix pain
   points, and enhance overall product experience.

## Measurement Frameworks

### DORA (Dev-Ops)

DORA (**D**ev**O**ps **R**esearch and **A**ssessment) metrics are a set of key performance indicators that measure 
software delivery performance and operational efficiency in DevOps teams. These metrics help organizations evaluate 
and improve their development processes. It is based upon 4 Metrics:

 - **Deployment Frequency (DF):** Measures how often code is successfully deployed to production.
 - **Lead Time for Changes (LTC):** The time taken from code commit to successful deployment.
 - **Change Failure Rate (CFR):** The percentage of deployments that cause failures in production.
 - **Mean Time to Restore (MTTR):** The average time required to recover from a failure in production.

If DORA needs to be applied to the overall Software production, **LTC** may be considered as Cycle Time and broken
down into the following components:

 - Coding time: The period between the first commit to a branch and the opening of a PR to merge this branch into 
   the primary branch.
 - Pickup time: The period between when someone creates a PR and when a code review has started.
 - Review time: The period between the start of a code review and when someone merges the code.
 - Deploy time: The period between when code is ready to merge and when your CD system deploys it to production.

In this way DORA is extended to a comprehensively view an organization's software delivery performance.

### SPACE (Holistic)

```{seealso}
Partially taken from [SPACE Metrics Framework for Developers Explained]{https://linearb.io/blog/space-framework} 
```

The SPACE Metrics Framework is a developer productivity measurement framework that captures five key dimensions 
of the software development lifecycle. SPACE is an acronym that stands for: 

 - **S**atisfaction and well-being
 - **P**erformance
 - **A**ctivity
 - **C**ommunication and collaboration
 - **E**fficiency and flow.

_Satisfaction and well-being_ focuses on developers' well-being and engagement in their work environment. It measures how
content and motivated team members are, which can directly impact their productivity and creativity. High satisfaction 
levels typically lead to:

 - Better retention
 - Higher morale
 - A more positive workplace culture

_Performance metrics_ evaluate the effectiveness of the development process and the quality of the output produced. 
This category assesses how well the team delivers features, the quality of the code, and how efficiently they work. 
It encompasses quantitative measures like code quality and qualitative aspects like stakeholder feedback.

The _Activity_ category tracks the volume and types of work developers do. It reflects the level of engagement and effort
within the team, measuring the frequency of coding, collaboration, and other development-related tasks. 
These metrics help in understanding how actively the team is working and where time is allocated.

_Communication_ metrics assess how effectively information is shared within and between teams. This category examines
the frequency and quality of interactions, feedback processes, and collaboration tools used. Effective communication
is vital for coordination, knowledge sharing, and maintaining team alignment, which ultimately influences project 
success.

_Efficiency_ metrics measure how well resources (including time, tools, and personnel) are utilized. This category 
focuses on reducing waste and streamlining workflows to maximize output. It helps identify bottlenecks and improve 
the overall speed and quality of software delivery.

When applying this framework to measuring productivity, we should choose between one and three metrics to track within 
each of the five dimensions.

Where DORA provides a more focused view on DevOps, the SPACE Metrics provides a more broad view of the overall software
engineering process. However, since metrics are partially shared between the two frameworks, it is often suggested to start
with DORA and then introduce SPACE.

SPACE is defined on 20 individual metrics:

 1. **Developer Satisfaction Surveys** to understand how developer feel about Work Environment, Tools, Teams Dynamics,
    and Job Satisfaction.
 2. **Employee Net Promoter Score** (how likely employees to recommend workplace to others)
 3. **Work Life Balance Indicators**
 4. **Career Opportunities**
 5. **Code Quality Metrics** from code review and statical analysis (number of bugs in production, code complexity, 
    usage of coding standard)
 6. **Feature Delivery Rate**
 7. **Velocity**
 8. **Defect Density** (number of defects per KLOC)
 9. **Commit Frequency**
 10. **Marge Request Activity**
 11. **Time Spent in Development vs. Time Spent on Other Activities**
 12. **Pair Programming Sessions** (more session indicates a culture of knowledge sharing)
 13. **Cross-Team Collaboration Frequency**
 14. **Communication Tool Usage Metrics** (high usage of async communication channels with effective outcomes indicates 
     strong engagement, but excessive synchronous meetings may highlight inefficiency)
 15. **Feedback Loops** (speed, quantity and quality of feedback during reviews)
 16. **Documentation Completeness and Update Frequency**
 17. **Cycle Time**
 18. **Lead Time**
 19. **Resource Utilization** (how effectively team members' time is allocated to productive work versus non-productive 
     tasks)
 20. **Deployment Frequency**

The collected metrics are then benchmarked with respect to a chosen reference SPACE metrics. The benchmarking provides
three key outcomes:

 - **Historical Context**: the usage over time of SPACE provides a way to understand past and present performance. This
   allows to understand trends happening in the organization.
 - **Industry Comparison**: internal metrics may be compared with respect to industry benchmarks
 - **Effective goal settings**: once metrics have been internally and externally benchmarked, it is possible to begin a 
   _goal setting process_, and determine the metrics with greatest opportunity and priority for improvement.

---

## Management Proposal

```{danger}
Everything written in this chapter is a proposal. It can be modified, applied differently, and adapted to the single team
experiences and workflows. It is important to understand the gist behind it. The main objective is to narrate the day
to day work, without impacting too much on the team, and still gathering important insight about what works and what
does not work.

And, **to reiterate**, the objective **is not** to track a single worker performance, but to understand where we can
improve our work together.
```

Effective project and team resources management is critical for ensuring efficiency, transparency, and accountability.
This proposal outlines a structured approach to managing projects and tracking team activities using 
[**GitLab**](https://gitlab.antemotion.com) as the primary project management system. The goal is to ensure that all 
work, whether directly related to software development or not, is documented and traceable within a dedicated 
**Project Management Repository** for each team.

Tracking enable better management decision, providing an objective way to understand if and where teams lack resources,
and how the teams mostly spend its resources. Knowing where the team is exhausting resource is also an indication if
stakeholder is wasting limited resources in activities with low return of investment (e.g., too many customized _Demo_
for different customer, which requires preparation efforts from the team, vs. _re-using_ existing _Demo_).

### Structuring Project Management in GitLab

Each team is assigned a **dedicated repository** on GitLab for tracking its **resources and activities**. This repository 
serves as the central hub for documenting project milestones, tracking epics and features, managing discussions, and 
ensuring visibility into team efforts.

```{note}
Team leaders are responsible for the repository maintenance, and are strongly invited to leverage additional of 
**Gitlab** features that helps them in day to day activities (e.g., custom _Boards_ ordered by priority labels).

While team leaders are directly responsible for repository maintenance, the _actual_ maintenance is a shared 
effort with the **full team members**.
```

#### GitLab Milestones for Tracking Project Progress

GitLab’s **Milestones** feature is used to track significant project achievements. Milestones represent key objectives or 
phases within the project and serve as **reference points** for measuring progress. It is expected that a team can handle
**one** active Milestone. Nothing prevents teams to plan Milestones ahead, or use a Milestone to track the activities
related to a specific customer Project. Each milestone should:

 * Contain a **description** of objectives and expected deliverables.
 * Possibly, have a **prospected due date**, in particular when the milestone becomes active
 * Include **linked issues** representing the epics and features contributing to its completion.
   
   ```{warning}
   To link a issue, the issue must be assigned to a specific Milestone. This can be done via interface or using the 
   rapid comment `/milestone %N` where `N` is the id of the Milestone.
   ```

**Gitlab** Milestones automatically tracks linked issues, giving an immediate automatic Board and a percentage of the progress.

```{note}
In Software development, usually a Milestone coincides with the new Release of the Product
```

```{admonition} Suggested Configuration
This is the suggested configuration for a possible Project Management Repository in Gitlab:

 * Settings &rarr; General &rarr; 
   * **Visibility, project features, permissions**
     * Project Visibility: {bdg-primary}`Internal`
     * Issues: {bdg-success}`Enabled`
     * Repository: {bdg-success}`Enabled`
       * Merge Requests: {bdg-success}`Enabled`
       * Forks: {bdg-danger}`Disabled`
       * Git Large FileSystem: {bdg-danger}`Disabled`
       * CI/CD: {bdg-danger}`Disabled`
     * Container Registry: {bdg-danger}`Disabled`
     * Analytics: {bdg-success}`Enabled`
     * Security and Compliance: {bdg-danger}`Disabled`
     * Wiki: {bdg-warning}`You Decide`
     * Snippets: {bdg-warning}`You Decide`
     * Package Registry: {bdg-danger}`Disabled`
     * Model Experiments: {bdg-danger}`Disabled`
     * Model Registry: {bdg-danger}`Disabled`
     * Monitor: {bdg-danger}`Disabled`
     * Environments: {bdg-danger}`Disabled`
     * Feature Flags: {bdg-danger}`Disabled`
     * Infrastructure: {bdg-danger}`Disabled`
     * Releases: {bdg-danger}`Disabled`
   * CI/CD Catalog Project: {bdg-danger}`Disabled`
 * Settings &rarr; Merge Requests
   * Merge Options: Enable "Delete Source Branch" option by default: {bdg-success}`Enabled`
   * Squash commit when merging: {bdg-primary}`Require`
```

### Issues for Managing Epics and Features

Issues are the primary tool for tracking work in GitLab. They are categorized into **Epics** and **Features**, distinguished 
by their level of granularity in describing the amount of work to be done.

#### Epics
 
 * Represent **large work units** that may span multiple _sprints_.
 * Are broken down into multiple **Feature issues**.
 * Typically **not assigned** to a single person but remain under the responsibility of team leaders.
 * Serve as containers for overarching objectives and roadmap items.

In order to keep the content of the Epic Issues consistent, it is possible to create a _template_ as a file
inside the project. The template file should be included in `.gitlab/issue_templates/Epic.md`:

```md
## Title <!-- Define a title -->

<!-- 
  Insert below a short description text for the epic 
-->

/milestone %(insert milestone number) <!-- assign to a milestone -->
/labels ~Epic                         <!-- mark as epic -->
@all                                  <!-- alert all team components -->
```

The template may be selected from the interface of Gitlab while creating a new 

During the development of the Epic, it will be probably split in several Features. There are a couple of 
solutions to keep all the string attached:

 1. Using the Linked Items widget to connect the Epic with the Feature

    ![Linked Items](images/pm/linked_items.png)

 2. Cite the Epic in the Feature description text or comment. The two will be referenced automatically 
    in the issue history by Gitlab. To cite, use the symbol `#N`, with `N` the id number of the issue.
    Cross-reference between different project can be expressed with the syntax 
    `{project-slug-name}#{issue-number}`

##### Public Information Aggregator

Epic can be logged on a public Board (in Kanban style) that forces every one in office to be aware on what
the teams are working. The public kanban expose the load on each team, and the imbalances towards work item
with small return of investment.

![Public Kanban](images/pm/kanban.png)

The public Kanban has the following rules:

 1. Each row represents a Software or a Team
 2. There are 4 column, representing the major states of the Epics. Epic can only move from left to right.
    **Epics never move from right to left.** The four states are:
     - Backlog
     - In Progress
     - Delivering (e.g., under review)
     - Complete
 3. The epics are written on little post.it with the following information:
     - Name of the epic
     - Estimated duration
     - Optional Notes
     - Start date
     - Estimated Due Date (Start Date + Estimated Duration + Holidays, etc.)
 4. The color of the notes gives the sensation of return of investment:
     - White: work on software
     - Yellow: work on customer project (reduced investment return)
     - Red: Demo (high risk of small investment return)
 5. At regular intervals (approx. every 3 month), completed task are removed from the board.

#### Features
 
 * Represent **smaller, actionable tasks** that _may_ derive from an Epic.
 * Are assigned to **a specific team member**.
 * Should contain **User Stories** that define the requirements.
 * Include discussions on **What to achieve, How to achieve it, and Potential Risks**.
 * Encourage collaboration through comments, updates, and clarifications over time.

In order to keep the content of the Feature Issues consistent, it is possible to create a _template_ as a file
inside the project. The template file should be included in `.gitlab/issue_templates/Feature.md`:

```{note}
Text inside `<!--` and `-->` are comments that will not appear in the Gitlab rendered interface
```

```md
## Title <!-- Define a title -->

<!-- 
  (WHAT) Insert below a short description text for the epic 
-->

### User Stories

<!-- 
  (WHY) Provide some user story about the current feature 
-->

### Technical Description

<!-- 
  (HOW) **Vaguely** describe the technical approach that can applied to implement 
  the current feature
-->

### Potential Risks (optional)

<!--
  (RISK) If necessary, provide a list of potential risks connected with the feature, e.g.,

  * **Integration Issues**: The feature may not be compatible with existing systems, 
    causing unexpected failures, requiring significant rework, or jeopardize other
    features implementation
  * **Performance Degradation**: Implementing the feature may introduce latency or 
    reduce system efficiency, impacting user experience.  
  * **Unclear Requirements** – Ambiguous or evolving requirements may lead to scope 
    creep, delays, or misalignment with stakeholder expectations.  
  * **Security Vulnerabilities**: The feature may introduce potential security risks, 
    such as data leaks, unauthorized access, or compliance violations.
-->

#(Epic reference)                     <!-- Optional: refer to an existing Epic -->
/milestone %(insert milestone number) <!-- assign to a milestone -->
/labels ~Feature                      <!-- mark as epic -->
/assign @team.member                  <!-- Assign to a team member -->
```

#### Organization labels

To facilitate tracking, **specific labels** should be assigned to each issue to differentiate epics and features, 
along with priority tags such as **High, Medium, and Low**. A list of _possible_ labels to maintain:

 * Issue Type: {bdg-primary}`Epic`, {bdg-primary}`Feature`
 * Priority: {bdg-danger}`High Priority`, {bdg-warning}`Medium Priority`, {bdg-success}`Low Priority`
 * Status: {bdg-danger}`Blocked`
 * Informative: {bdg-warning}`Risk Identified`
 * Work Item Type: {bdg-primary}`Administrative`, {bdg-primary}`Research`, {bdg-primary}`Training`, 
   {bdg-primary}`Support`, {bdg-primary}`DevOps`, {bdg-primary}`Demo`

```{warning}
The proposal refer only to a {bdg-danger}`Blocked` state. No more state are required if Merge Requests
are used to track the evolution of work:

 * an issue without a corresponding Merge Request is {bdg-primary}`In Backlog`
 * an issue with a corresponding Merge Request in Draft is {bdg-primary}`In Progress`
 * an issue with a corresponding Merge Request in review is {bdg-warning}`Awaiting Review`
 * an issue with a corresponding Merge Request completed is closed, and considered 
   {bdg-success}`Complete`

{bdg-danger}`Blocked` represent a state where progress on the issue is staled for reasons outside the 
feature itself. Possibly, only strong technical reason may put an issue that was progressing in a stale
state (e.g., severe bug in framework used for development)
```

Labels can be created at project Level. They will become available in both Issues and Merge Requests.

![See and Create Labels](images/pm/labels.png)

#### Creating the templates

The online editor can be used to create the templates for Epics and Features:

![Open web IDE](images/pm/open_web_ide.png)
![Create Files and Directory](images/pm/create_file_and_dir.png)
![Edit templates file content](images/pm/creating_files.png)
![Commit Templates](images/pm/commit_templates.png)
![In this case, we are directly making a commit on `main`](images/pm/commit_master.png)

```{warning}
The common Git flow on the Gitlab Web IDE is slightly different with respect to the common Git Flow.

In local Git Commit Flow:

 * files are edited
 * files that will be part of a commit are put in stage
 * staged file are made part of a commit, and commit is included in current local brach tree
 * to synchronize the local branch with the remote branch, the local state must be **pushed**
   on server.

By using Gitlab Web IDE, a commit includes the push to the remote branch, since local branches
do not exist.
```

![Create a template issue](images/pm/create_template_issue.png)

#### Merge Requests as a Work Log

A critical aspect of this management approach is using **Merge Requests (MRs) as a tool for tracking work progress**. 
Even though these MRs _do not contain code_ ([see more](#code-in-merge-request)), they serve as a log of discussions, 
updates, and decisions related to the feature being developed.

As for an example,

:::{danger}
:name: code-in-merge-request

Unfortunately, Gitlab **requires** a code change to allow merge of MRs. We can use this requirement to our own 
advantage, holding a **CHANGELOG** file in the code of the repository. This file may help us in rapidly tracking
the work done for creating reports (e.g., the LP6 or STAR report requires this kind of table).

An example of **CHANGELOG.md** file may be in the form:

```md
| Date    | Author       | Short Description     | Project (Opt) |
|---------|--------------|-----------------------|---------------|
| 02.2025 | Matteo Ragni | Work Item Description | -             |
```

There is an important drawback: multiple users editing the same file will soon reach a situation of **merge
conflicts** that requires a little of experience to be solved. One simplification to the approach, is to apply
the separation principle and keeping one **CHANGELOG file for each team member**.
:::

#### Workflow with Merge Requests

 1. When a team member starts working on a **Feature Issue**, they open a **Merge Request (MR)**. The member
    is responsible for the maintenance of the Merge request feed content.

    ![Create Merge Request](images/pm/create_merge_request.png)

    ```{note}
    The Merge request will be created on a Git branch named as `{Issue Number}-{title of issue dash separated}`.
    In the example, the branch will be `2-example-feature`. Name of the brach can be customized by clicking on
    the _down-caret_ button near to _Create merge request_. However, for managing the project, branch naming is
    not important
    ```

 2. The **Merge Request serves as a daily log**, capturing discussions, obstacles, and updates. While working
    on the underling work item, the Merge Request should be put in **Draft Mode**. The Merge request should:

     * be created in **Draft Mode** as long as the work package is not complete
     * have a description with text `Closes #N`, with `N` identification number of origin issue, so that it 
       closes automatically the related issue when the work is complete (Merge Request _merged_)
     * be assigned to a Team Member and include a reviewer (normally assignee and reviewer differs)
     * (_optional_) _delete the source branch when merge request is accepted_, to keep the git tree clean
       and readable
     * (_optional_) _squash commit in a single one before merging_, to keep git tree clean and readable

    ![Merge Request Creation](images/pm/merge_request.png)

 3. Team members should **document relevant information** from team meetings, stand-ups, and ad hoc discussions,
    by adding new comment to the MR. While writing comment, it is possible to refer to other elements in Gitlab
    or provide time estimate and time spent.

    ![Merge request comments](images/pm/mr_comment_1.png)

 4. (_Optional for Customer Projects_) Merge request may be used to keep a detailed log of the time spent on a 
    specific work package for a specific customer, using commands such as `/estimate {TIME}`, `/spend {TIME}`,
    `/spend -{TIME}`, `/remove_estimate` and `/remove_time_spent`. 

    ![Merge request comments](images/pm/mr_after_comment.png)

 5. Once work is completed, the Merge Request can be put out of Draft, and review may be requested. To actually 
    make the merge request _mergeable_, at least a modification of the base code should be done. This is the
    situation in which an actual modification to the repository is required. It is possible to use the WebIDE:

    ![Merge Request Web Editor](images/pm/mr_webide.png)

    ![Merge Request Commit](images/pm/mr_edit.png)

    ![Merge Request Commit](images/pm/mr_edit_complete.png)

    ![Merge Request Ready](images/pm/mr_ready.png)

 6. Once the work related to the feature is **complete**, the Merge Request may be reviewed and then merged 
    to indicate closure of the work item. The related feature will be closed automatically. If during review 
    something needs to be changed, it is possible to _Start a Thread_, that will be shown as a problem to be
    resolved for the Assignee:

    ![Open a thread](images/pm/review_comment.png)

    ![Review Round](images/pm/review_round.png)

    ```{warning}
    Not everything may be solved in this work package: the button near _Resolve Thread_ in the discussion
    may be used to open a new issue that continues in a separate work package the problem arisen during 
    the review process.
    ```

    Finally, a fully resolved work package can be merged. This will close the Merge Request and the associated
    Feature Issue, removing it from the Backlog. Fantastic, another piece of the puzzle is complete!

    ![Review Round](images/pm/mr_merged.png)

    ![Review Round](images/pm/mr_merged.png)

    Contextually, the related issue is closed automatically.

    ![Review Round](images/pm/issue_closed.png)

```{warning}
During work, it may happen that some work creates conflicts. Conflicts happens when the branch wants to modify
a file that has been already modified by someone else, and else modification is already part of the branch
we want to write into. Gitlab intercepts this situation and prevents the merge. Conflicts should be resolved
before continuing with merge:

![Merge Conflicts](images/pm/mr_conflicts.png)

![Merge Conflicts](images/pm/mr_conflicts_solve.png)

After solving all commits, the Merge Request become again _mergeable_.

**With the separation principle (keeping different person working on different files), conflicts are
always avoidable, because the repository is in a state of conflict that Gitlab is able to fix
automatically (_fast-forward_ approach)**.

When the MR can be fast-forwarded, the interface still allows to merge.

![Merge Conflicts](images/pm/mr_ffw.png)
```

This approach ensures that all information remains consolidated in GitLab, making it easy for team leaders and managers to track progress.

#### Quick Action Reference

| Command                    | Action                                     | Issue | Merge request |
|:---------------------------|:------------------------------------------ |:------|:--------------|
| `/todo`                    | Add a To Do                                | ✓     | ✓             |
| `/done`                    | Mark To Do as done                         | ✓     | ✓             |
| `/subscribe`               | Subscribe                                  | ✓     | ✓             |
| `/unsubscribe`             | Unsubscribe                                | ✓     | ✓             |
| `/close`                   | Close                                      | ✓     | ✓             |
| `/reopen`                  | Reopen                                     | ✓     | ✓             |
| `/title <New title>`       | Change title                               | ✓     | ✓             |
| `/award :emoji:`           | Toggle emoji award                         | ✓     | ✓             |
| `/assign me`               | Assign yourself                            | ✓     | ✓             |
| `/assign @user`            | Assign one user                            | ✓     | ✓             |
| `/assign @user1`           | Assign user                                | ✓     | ✓             |
| `/unassign @user1`         | Remove assignee(s)                         | ✓     | ✓             |
| `/reassign @user1`         | Change assignee                            | ✓     | ✓             |
| `/unassign`                | Remove current assignee                    | ✓     | ✓             |
| `/milestone %milestone`    | Set milestone                              | ✓     | ✓             |
| `/remove_milestone`        | Remove milestone                           | ✓     | ✓             |
| `/label ~label1 ~label2`   | Add label(s).                              | ✓     | ✓             |
| `/unlabel ~label1 ~label2` | Remove all or specific label(s)            | ✓     | ✓             |
| `/estimate <1w 3d 2h 14m>` | Set time estimate                          | ✓     | ✓             |
| `/remove_estimate`         | Remove time estimate                       | ✓     | ✓             |
| `/spend <time(1h 30m)> <date(YYYY-MM-DD)>` | Add spent time; optionally, specify the date that time was spent on      | ✓ | ✓ |
| `/spend <time(-1h 5m)> <date(YYYY-MM-DD)>` | Subtract spent time; optionally, specify the date that time was spent on | ✓ | ✓ |
| `/remove_time_spent`       | Remove time spent                          | ✓     | ✓             |
| `/lock`                    | Lock the thread                            | ✓     | ✓             |
| `/unlock`                  | Unlock the thread                          | ✓     | ✓             |
| `/due <date>`              | Set due date. Examples of valid `<date>` include `in 2 days`, `this Friday` and `December 31st`. | ✓ |   |
| `/remove_due_date`         | Remove due date                            | ✓     |               |
| `/confidential`            | Make confidential                          | ✓     |               |
| `/duplicate <#issue>`      | Mark issue as a duplicate of another issue | ✓     |               |
| `/move <path/to/project>`  | Move this issue to another project         | ✓     |               |
| `/target_branch <Local branch Name>` | Set target branch                |       | ✓             |
| `/approve`                 | Approve the merge request                  |       | ✓             |
| `/merge`                   | Merge (when pipeline succeeds)             |       | ✓             |
| `/create_merge_request <branch name>` | Create a new merge request starting from the current issue | ✓ |  |
| `/relate #issue1 #issue2`  | Mark issues as related                     | ✓     |               |
| `/tableflip <Comment>`     | Append the comment with `(╯°□°)╯︵ ┻━┻`   | ✓     | ✓             |
| `/shrug <Comment>`         | Append the comment with `¯\＿(ツ)＿/¯`     | ✓     | ✓             |

### Scope and Limitations

While GitLab is used for tracking project management efforts, it is important to note that:

 * **Merge Requests do not contain code**; instead, they are used for tracking the **execution of tasks and features**.
   However we are still forced to modify something in the Repository, otherwise merging will not be performed.
 * Work tracked in GitLab may be performed **outside of GitLab** (i.e., Perforce Helix).
 * Teams are encouraged to **log all activities**, even those not directly related to software development, 
   to provide a complete overview of resource utilization.

### Encouraging Full Activity Tracking

To enhance **resource visibility and team accountability**, teams should aim to **document all significant activities** in 
the project management repository. This includes:

 * **Administrative tasks**, such as external collaborations, or documentation efforts.
 * **Research and analysis**, including feasibility studies, market research, or competitive assessments.
 * **Training and development**, ensuring that time spent on skill improvement is recognized.
 * **Support and maintenance activities**, including bug fixes, incident responses, or customer courses.

By tracking activities comprehensively, the repository becomes an objective work log to be used to identify inefficiencies, 
optimize workloads, and improve planning for future projects.

---

## Glossary

:::{glossary}
Sprint
: A time-boxed period, typically 1-4 weeks, during which a specific set of tasks or features is developed and  delivered. At the end of the sprint, a working increment of the product is reviewed.

User Story
: A brief, simple description of a feature or requirement from the perspective of the user. It typically follows the format: `As a [user], I want [feature] so that [reason].`

Backlog
: A prioritized list of features, tasks, or requirements that need to be completed. It can be divided into two types: **Product Backlog** (overall project) and **Sprint Backlog** (specific to a sprint).

Product Owner
: A key Scrum role responsible for defining product features, maintaining the product backlog, and ensuring that the team delivers value to the business or customer.

Scrum Master
: A facilitator and servant leader in the Scrum framework, responsible for supporting the Scrum team, removing obstacles, and ensuring Scrum practices are followed.

Development Team
: The group of professionals (e.g., developers, testers, designers) responsible for delivering the product increment during each sprint.

Product Increment
: The sum of all completed product backlog items at the end of a sprint. It must be in a usable state and meet the team's definition of "done."

Definition of Done
: A shared understanding of what it means for a user story or feature to be complete. This could include unit tests, documentation, and code review completion.

DoD
: See {term}`Definition of Done`

Burndown Chart
: A graphical representation of work completed versus work remaining in a sprint or project, typically showing progress over time. It's used to visualize the team's pace and identify if they are on track.

Velocity
: A measure of the amount of work completed in a sprint, often expressed in story points, hours, or another unit of work. Velocity helps teams predict how much work they can handle in future sprints.

Epic
: A large user story that cannot be completed in a single sprint and is broken down into smaller, more manageable user stories.

Story Points
: A unit of measurement used to estimate the effort, complexity, or size of a user story, often relative to other stories. It helps in determining how much work can be accomplished in a sprint.

Release Plan
: A high-level plan that outlines the schedule and features to be delivered in upcoming releases. It is flexible and can change based on feedback and priorities.

Sprint Planning
: A Scrum event where the team defines which user stories or tasks will be worked on during the upcoming sprint. It involves setting a sprint goal and identifying deliverables.

Daily Standup
: A short, daily meeting (usually 15 minutes) where team members share what they did yesterday, what they'll do today, and any obstacles they’re facing.

Daily Scrum
: See {term}`Daily Standup`

Sprint Review
: A meeting held at the end of the sprint to demonstrate the work completed, get feedback from stakeholders, and discuss the next steps.

Sprint Retrospective
: A meeting where the team reflects on the sprint, discusses what went well, what could be improved, and identifies actions for continuous improvement.

Release Burnup Chart
: A chart that tracks progress towards a release goal. It shows the total scope and how much work has been completed, helping teams gauge progress towards the final release.

Shippable Product
: A product increment that is fully functional, tested, and ready to be deployed to the end-users. It must meet the {term}`Definition of Done` (DoD).

Impediment
: Any obstacle or issue that blocks progress within a sprint. The Scrum Master’s role is often to help remove these impediments to ensure the team can continue working efficiently.

Feature Toggle
: A software development technique that allows new features to be released in a disabled state, enabling them to be turned on or off without redeployment.

Test-Driven Development
: A software development approach in which tests are written before the code. The process involves writing a test, running it to see it fail, then writing the code to pass the test.

TDD
: See {term}`Test-Driven Development`.

Continuous Integration
: The practice of frequently integrating code changes into a shared repository to ensure that the software remains in a deployable state. This is typically followed by automated testing.

CI
: See {term}`Continuous Integration`.

Continuous Delivery
: A software development practice that ensures that code is always in a deployable state and can be released to production at any time, often automatically.

CD
: See {term}`Continuous Delivery`.

Minimum Viable Product
: The simplest version of a product that solves the core problem and provides the basic features to satisfy early adopters. It’s used to get feedback and iterate quickly.

MVP
: See {term}`Minimum Viable Product`.

Backlog Grooming
: The ongoing process of reviewing and prioritizing the product backlog, ensuring that user stories are well-defined, estimated, and ready for upcoming sprints.

Backlog Refinement
: See {term}`Backlog Grooming`.

Pair Programming
: A software development technique where two developers work together on the same task. One writes the code (driver), while the other reviews and provides feedback (navigator).
:::

```{seealso}
The [Agile Alliance Glossary](https://www.agilealliance.org/agile101/agile-glossary/)
```

---

## If not AGILE...

Agile is not the only technique for Project Management, but is the one with focus on reacting to unclear and 
rapidly changing requirements. Other techniques are based on the assumption of requirements which are perfectly 
defined.

A short list of the most discussed techniques, in the field of software development, are:

### Waterfall

 - **Description**: A linear, sequential approach where each phase (e.g., planning, design, development, testing) 
   must be completed before moving to the next. Requirements are defined upfront, and changes during development 
   are difficult to implement.
 - **Why Important**: Waterfall is still used in software projects where requirements are well-defined, stable, and 
   unlikely to change, such as large-scale, mission-critical systems or projects with strict regulatory or compliance 
   requirements (e.g., aerospace, government).

It appears clear that the rapidly evolving requirements makes impossible to tackle projects with this approach.

### V Model

 - **Description:** The V Model (Verification and Validation Model) is a software development lifecycle that 
   emphasizes a strict, sequential process where each development phase has a corresponding testing phase. It follows 
   a V-shaped structure, with the left side focusing on requirements and design, and the right side on validation 
   and testing.
 - **Why Important:** The V Model ensures early defect detection by integrating testing at each stage. It is widely 
   used in safety-critical industries (e.g., automotive, aerospace, healthcare) where strict validation and compliance 
   are required. The structured approach helps minimize errors before implementation, reducing costly late-stage changes.

This method is the one that is probably most used in the Automotive Industry to develop ADAS and AV systems. However,
it requires a strict definition of requirements in advance.

```{note}
V-Model is lazily inspired by the PRINCE2 Model
```

### Incremental

 - **Description:** The Incremental Model develops software in small, manageable increments, where each version 
   adds functionality. Instead of delivering the entire system at once, features are developed, tested, and 
   delivered in iterations, allowing gradual improvements.
 - **Why Important:** This model enables faster time-to-market, as early increments provide working software 
   while later stages enhance it. It is widely used as evolution of **Waterfall**. Requirements are set in advance, 
   but structured in such a way it is possible to ship intermediate versions of the software.