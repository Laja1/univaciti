"use client";

import { imgLinks } from "@/public/assetLinks";
import Image from "next/image";

const Home = () => {
  const courseDescription = {
    name: "Cloud Engineering",
    banner: imgLinks.cloudcompute,
    tagline:
      "Master the fundamentals of cloud computing, deployment, and automation.",
    level: "Intermediate",
    duration: "8 weeks",
    mode: "Online + Self-paced",
    instructor: {
      name: "Samuel Adelaja",
      title: "Cloud Engineer | AWS Certified",
      experience: "5+ years designing scalable cloud architectures",
    },
    prerequisites: [
      "Basic understanding of networking concepts",
      "Familiarity with Linux command line",
      "Some experience with at least one programming language (e.g., Python, JavaScript)",
    ],
    objectives: [
      "Understand core concepts of cloud computing and virtualization",
      "Deploy and manage applications on AWS, Azure, and Google Cloud",
      "Implement CI/CD pipelines and Infrastructure as Code (IaC)",
      "Ensure high availability, scalability, and security in cloud environments",
    ],
    modules: [
      {
        title: "Introduction to Cloud Computing",
        content:
          "Understand cloud concepts, models, and services (IaaS, PaaS, SaaS).",
      },
      {
        title: "Networking and Virtualization",
        content:
          "Learn about VPCs, subnets, gateways, and virtualized environments.",
      },
      {
        title: "Compute and Storage",
        content: "Work with EC2, S3, Azure VM, and Google Compute Engine.",
      },
      {
        title: "Infrastructure as Code",
        content:
          "Automate provisioning using Terraform and AWS CloudFormation.",
      },
      {
        title: "CI/CD and DevOps Integration",
        content: "Integrate Jenkins, GitHub Actions, and container workflows.",
      },
      {
        title: "Monitoring and Security",
        content:
          "Apply best practices for security, IAM, and system monitoring.",
      },
      {
        title: "Final Project",
        content:
          "Deploy a multi-tier application using IaC and CI/CD pipelines.",
      },
    ],
  };

  return (
    <div className="w-full space-y-8">
      {/* Course Title & Tagline */}
      <div>
        <h1 className="text-3xl font-bold">{courseDescription.name}</h1>
        <p className="text-muted-foreground mt-1">
          {courseDescription.tagline}
        </p>
      </div>

      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-[800px] rounded-lg overflow-hidden">
        <Image
          src={courseDescription.banner}
          alt={courseDescription.name || "Course banner"}
          fill
          priority
          className="object-cover "
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      {/* Course Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border p-4 rounded-lg">
        <p>
          <strong>Level:</strong> {courseDescription.level}
        </p>
        <p>
          <strong>Duration:</strong> {courseDescription.duration}
        </p>
        <p>
          <strong>Mode:</strong> {courseDescription.mode}
        </p>
        <p>
          <strong>Instructor:</strong> {courseDescription.instructor.name}
        </p>
      </div>

      {/* Instructor Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">About the Instructor</h2>
        <p>{courseDescription.instructor.title}</p>
        <p className="text-muted-foreground">
          {courseDescription.instructor.experience}
        </p>
      </section>

      {/* Prerequisites */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-1">
          {courseDescription.prerequisites.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Objectives */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Learning Objectives</h2>
        <ul className="list-disc list-inside space-y-1">
          {courseDescription.objectives.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Modules */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Course Modules</h2>
        <ul className="list-decimal list-inside space-y-2">
          {courseDescription.modules.map((module, index) => (
            <li key={index}>
              <strong>{module.title}:</strong> {module.content}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
