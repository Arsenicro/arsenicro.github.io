import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex justify-center items-center flex-grow">
      <main className="">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 animate-gradient">
          Kamil Matuszewski
        </h1>
        <TechnicalDescription
          roles={[
            {
              id: "frontend",
              name: "Frontend Developer",
              className: "from-red-500 to-orange-500 animate-gradient",
            },
            {
              id: "pm",
              name: "Project Manager",
              className: "from-indigo-400 to-cyan-400 animate-gradient",
            },
            {
              id: "po",
              name: "Product Owner",
              className: "from-green-300 to-teal-600 animate-gradient",
            },
          ]}
          universityRole={{
            id: "lecturer",
            name: "University Lecturer",
            className: "from-fuchsia-600 to-purple-600 animate-gradient",
          }}
        />
        <div className="flex justify-center pt-3">
          <Socials />
        </div>
      </main>
    </div>
  );
}

interface IRole {
  id: string;
  name: string;
  href?: string;
  className?: string;
}

function getSeparator(index: number, length: number) {
  if (index < length - 2) {
    return ", ";
  } else if (index === length - 2) {
    return " and ";
  } else {
    return "";
  }
}

function TechnicalDescription({
  roles,
  universityRole,
}: {
  roles: IRole[];
  universityRole: IRole;
}) {
  return (
    <div className="text-lg md:text-xl lg:text-2xl text-center pt-3">
      Multi-faceted professional:{" "}
      {roles.map((role, index) => (
        <React.Fragment key={role.id}>
          <Role role={role} />
          {getSeparator(index, roles.length)}
        </React.Fragment>
      ))}{" "}
      skilled at combining soft and technical skills.{" "}
      <Role role={universityRole} /> dedicated to knowledge sharing. Passionate
      about learning and teaching.
    </div>
  );
}

function Role({ role }: { role: IRole }) {
  if (role.href) {
    return (
      <a
        key={role.id}
        href={role.href}
        className={cn(
          "text-transparent bg-clip-text bg-gradient-to-r",
          role.className
        )}
      >
        {role.name}
      </a>
    );
  }

  return (
    <p
      key={role.id}
      className={cn(
        "inline-block text-transparent bg-clip-text bg-gradient-to-r",
        role.className
      )}
    >
      {role.name}
    </p>
  );
}

function Socials() {
  return (
    <div className="flex gap-2">
      <a
        target="_blank"
        href="https://www.facebook.com/ArsenicRo"
        rel="noopener noreferrer"
        aria-label="Github"
        className="rounded p-2 hover:bg-accent"
      >
        <FaFacebook className="h-8 w-8" />
      </a>
      <a
        target="_blank"
        href="https://github.com/Arsenicro"
        rel="noopener noreferrer"
        aria-label="Github"
        className="rounded p-2 hover:bg-accent"
      >
        <FaGithub className="h-8 w-8" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/arsenicro/"
        rel="noopener noreferrer"
        aria-label="Github"
        className="rounded p-2 hover:bg-accent"
      >
        <FaLinkedin className="h-8 w-8" />
      </a>
    </div>
  );
}
