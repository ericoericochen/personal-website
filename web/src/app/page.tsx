import { getAboutContent, getProjectsContent } from "@/lib/api";
import { LocalTimeBadge } from "@/app/_components/local-time-badge";
import { Badge } from "./_components/badge";
import markdownToHtml from "@/lib/markdownToHtml";

import markdownStyles from "./markdown.module.css";

const locations = [
  {
    city: "NY",
    state: "NY",
    timezone: "America/New_York",
  },
  {
    city: "SF",
    state: "CA",
    timezone: "America/Los_Angeles",
  },
  {
    city: "Boston",
    state: "MA",
    timezone: "America/New_York",
  },
];

export default async function Index() {
  const aboutContent = getAboutContent();
  const projectsContent = getProjectsContent();

  const aboutMe = await markdownToHtml(aboutContent);
  const projects = await markdownToHtml(projectsContent);
  const commitHash = process.env.NEXT_PUBLIC_COMMIT_HASH;

  return (
    <div className="bg-background w-full pt-8">
      <div className="flex flex-col gap-6 mx-6 md:mx-auto md:max-w-xl">
        <div className="no-scrollbar flex w-full flex-nowrap justify-start gap-1 overflow-x-auto md:w-fit md:flex-wrap md:justify-center [&>*]:shrink-0">
          {locations.map((location) => {
            return (
              <LocalTimeBadge
                key={location.city}
                city={location.city}
                state={location.state}
                timezone={location.timezone}
              />
            );
          })}
          <Badge>{commitHash}</Badge>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-1.5 mb-6 text-base font-medium">
            <h6 className="text-white">Eric Chen</h6>
            <p className="text-secondary">22</p>
          </div>
          <div
            className={`w-full ${markdownStyles.markdown}`}
            dangerouslySetInnerHTML={{ __html: aboutMe }}
          />
          <div
            className={`w-full ${markdownStyles.markdown}`}
            dangerouslySetInnerHTML={{ __html: projects }}
          />
        </div>

        <div className={markdownStyles.markdown}>
          <div className="flex flex-col">
            <a href="mailto:ericchen9025@gmail.com">ericchen9025@gmail.com</a>
            <a href="https://x.com/erico_cheny" target="_blank">
              X
            </a>
            <a
              href="https://www.linkedin.com/in/eric-chen-195939186/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/ericoericochen" target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
