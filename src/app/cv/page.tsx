export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">Curriculum Vitae</h1>

      <div className="space-y-12">
        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">Experience</h2>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">AWS Professional Services</h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">AWS</p>
              </div>
              <span className="text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full mt-2 sm:mt-0">Current</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Working with Global Financial Services at AWS Professional Services (ProServe).</li>
              <li>Architecting and implementing solutions using EKS, Serverless architectures, Lambda, and DynamoDB.</li>
              <li>Designing and building robust APIs and Data Lakes utilizing AWS Glue.</li>
              <li>Implementing secure cloud infrastructure with a focus on IAM security.</li>
              <li>Developing infrastructure as code using Terraform and CloudFormation.</li>
              <li>Implementing DevOps best practices and CI/CD pipelines with GitHub.</li>
              <li>Working with Amazon Connect for contact center solutions.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['AWS', 'EKS', 'Serverless', 'DynamoDB', 'AWS Glue', 'Lambda', 'Amazon Connect', 'Terraform', 'CloudFormation', 'DevOps', 'GitHub', 'APIs', 'Data Lakes', 'IAM', 'TypeScript', 'Node.js', 'React', 'Next.js'].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">Education</h2>

          <div className="flex flex-col sm:flex-row sm:justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">B.S. in Computer Science</h3>
              <p className="text-neutral-600 dark:text-neutral-400">University of Technology</p>
            </div>
            <span className="text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full mt-2 sm:mt-0">2014 - 2018</span>
          </div>
        </section>
      </div>
    </div>
  );
}