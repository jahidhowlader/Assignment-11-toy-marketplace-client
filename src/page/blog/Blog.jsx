import useTitle from "../../hooks/useTitle";

const Blog = () => {

    // custom Hooks
    useTitle('Blog')
    
    return (
        <>
            <hr />
            <div className='max-w-screen-xl mx-auto my-12'>
                <div>
                    <h3 className='text-2xl font-semibold'>Q1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p><span className='font-semibold'>Answer: </span> An access token and a refresh token are used in authentication and authorization processes to grant access to protected resources.</p> <br />
                    <p className='font-semibold'>Access Token:</p>
                    <ul>
                        <li>1. An access token is a credential that is issued by an authentication server upon successful authentication.</li>
                        <li>2. It represents the authorization granted to a client (user or application) to access specific resources or perform certain actions.</li>
                        <li>3. Access tokens typically have an expiration time to ensure security and are used to authenticate subsequent API requests.</li>
                    </ul>
                    <br />
                    <p className='font-semibold'>Refresh Token:</p>
                    <ul>
                        <li>1. A refresh token is a credential that is issued along with an access token.</li>
                        <li>2. It is used to obtain a new access token when the current one expires, without requiring the user to reauthenticate.</li>
                        <li>3. They are securely stored by the client and exchanged with the authentication server to get a new access token.</li>
                    </ul>
                </div>

                <br />
                <div>
                    <h3 className='text-2xl font-semibold'>Q2: Compare SQL and NoSQL databases?</h3>
                    <p><span className='font-semibold'>Answer: </span> SQL and NoSQL databases are two different types of database management systems that serve distinct purposes. Heres a comparison between SQL (relational) and NoSQL (non-relational) databases:.</p> <br />
                    <p className='font-semibold'>SQL Databases:</p>
                    <ul>
                        <li>1. SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships are established using foreign keys.</li>
                        <li>2. SQL databases enforce a rigid schema, meaning the structure of the data must be predefined and adhered to.</li>
                        <li>3. Query Language: SQL databases use SQL (Structured Query Language) for defining and manipulating the data. SQL provides a standardized way to interact with the database and perform complex queries.</li>
                    </ul>
                    <br />
                    <p className='font-semibold'>NoSQL Databases:</p>
                    <ul>
                        <li>1. NoSQL databases use a variety of data models, such as key-value pairs, documents, columnar, or graph structures. The data is organized in a more flexible and dynamic manner.</li>
                        <li>2. NoSQL databases are schema-less or have a flexible schema, allowing for dynamic and evolving data structures.</li>
                        <li>3. NoSQL databases use various query languages, such as MongoDB query language for documents or Cassandra Query Language (CQL) for columnar databases. The query languages are tailored to the specific data model used.</li>
                    </ul>
                </div>

                <br />
                <div>
                    <h3 className='text-2xl font-semibold'>Q3: What is express js? What is Nest JS ?</h3>
                    <p><span className='font-semibold'>Answer: </span> Express.js is widely used in the Node.js ecosystem due to its simplicity, flexibility, and wide community support. It allows developers to quickly build scalable and efficient web applications. Express.js is widely used in the Node.js ecosystem due to its simplicity, flexibility, and wide community support. It allows developers to quickly build scalable and efficient web applications.</p> <br />
                    <p className='font-semibold'>Express.js:</p>
                    <ul>
                        <li>1. Express.js allows you to define routes and handle HTTP requests easily.</li>
                        <li>2.  It supports middleware functions for handling request/response pipelines, enabling features such as authentication, error handling, and logging.</li>
                        <li>3. Query Language: Express.js can be integrated with various template engines like Pug, EJS, or Handlebars to generate dynamic HTML pages</li>
                        <li>4.  It supports all major HTTP methods (GET, POST, PUT, DELETE, etc.) for handling different types of requests.</li>
                    </ul>
                    <br />
                    <p className='font-semibold'>NestJS:</p>
                    <ul>
                        <li>1.  NestJS is built with TypeScript, allowing developers to leverage its strong typing and modern language features for better code quality and maintainability.</li>
                        <li>2.  It follows a modular architecture pattern, dividing the application into modules with clear boundaries and encapsulated functionality.</li>
                        <li>3. NestJS provides an intuitive and powerful dependency injection system, allowing for the easy management of application dependencies.</li>
                    </ul>
                </div>

                <br />
                <div>
                    <h3 className='text-2xl font-semibold'>Q4: What is MongoDB aggregate and how does it work ?</h3>
                    <p><span className='font-semibold'>Answer: </span> In MongoDB, the aggregate operation is used for processing and analyzing data from collections using a pipeline of stages. The aggregate operation allows for advanced data aggregation and transformation, similar to SQL GROUP BY clause or data manipulation in business intelligence tools. The MongoDB aggregate operation works as follows:</p> <br />
                    <li>1. Pipeline Stages:</li>
                    <li>2.  Data Processing:</li>
                    <li>3. Common Aggregate Stages</li>
                    <li>4.  Aggregation Framework Operators</li>
            </div>
        </div >
        </>
    );
};

export default Blog;