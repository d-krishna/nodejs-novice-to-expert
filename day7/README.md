# Microservices

Definition be Martin Fowler, Software Architecture Guru, from his microservices book:

In short, the microservice architectural style is an approach to developing a single application as a 
**suite of small services**, each running in its **own process** and communicating with lightweight mechanisms,
ften an HTTP resource API. These services are **built around business capabilities** and 
**independently deployable** by fully automated deployment machinery. 

There is a **bare minimum of centralized management** of these services, 
which may be written in different programming languages and use different data storage technologies.

-- James Lewis and Martin Fowler (2014)

## Features and Advantages:

- Independent development
- Independent deployment
- Fault Isolation
- Any tech stack
- Granular scaling
- Decoupling
- Componentization based on business capability
- Autonomy
- CI/CD
- Responsibility
- Automated Tests



## Characteristics:

- Componentization via Services
  - A component is a unit of software that is easily replaceable and upgradeable
  - library v/s service as component
    - library: in memory
    - service: remotely called: decoupled and cohesive
    
- Organized around Business Capabilities
  - Usually business breaks down a problem into: UI teams, server-side logic teams, and database teams --> this is what lead to monoliths
    - SImple changes lead to cross team effort
  - Based on capability: a single team needs all the skills: UI/UX, DB, app development, project management etc.
    - Requires strict interfaces
    - Difficult to keep strict boundary for functionalities
    
- Products not projects: Thought process and mentality
  - Project model: write a piece of software considered completed, dump it to service/maintainance org. Original team is disbanded
  - Product model: "you build you run it" thought process
    - Dev team takes full responsibility  of s/w in production
    - BRings dev team in day to day contact of how their s/w behaves in prod and its users behaviour
    - Rather than looking at s/w as a piece of functionality, devs get to see and connect with users
    - there is an on-going relationship where the question is how can software assist its 
      users to enhance the business capability.
              
- Smart endpoints and dumb pipes
  - No ESBs. Monoliths used ESBs to communicate which hand comples orchestration, smartness builtin for routing and data transformation based on business logic
  - Instead of comm channels being smart, make endpoints smart, make comm channels - pipes - dumb
  - Directly converting in-mem functions to RPC leads to chatty comm, instead build entire functionality into a service
  
- Decentralized Governance: More towards operations side
  - More power to people
  - End to end responsibility 
  - Each m/s can use its own tech stack, its own tools, its own standards
  - More opensource approach, can share battle tested libs to others
  - First define service contracts, then fulfill them
  - Instead of early morning pager duty calls, drives devs more towards quality development in first place
  
- Decentralized data management
  - Monlith: single db
  - M/S: each m/s manages its own db, either single tech for db or many db techs -> ployglot persistence
  - M/S: service level db decisions, not a solution wide db decision
  - String consistency v/s eventual consistency
  
- Infrastructure Automation
  - CI/CD
  - Auto creation of infra, championed by AWS
  
- Design for failure
  - Assume you service will always fail once in a while
  - Assume that the service you are consuming will fail once in a while
