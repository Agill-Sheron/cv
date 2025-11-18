"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "@/contexts/TranslationContext";
import { useSearchParams } from "next/navigation";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { RESUME_CONFIG } from "@/config/resume-config";

// Map icon names to components
const ICON_MAP: Record<string, any> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
};


export function MainContent() {
  const { t, tArray } = useTranslation();

  const searchParams = useSearchParams();
  
  const isGeneral = searchParams.has('general');
  const translationKey = isGeneral ? 'general' : 'bitcoin';

  const isPrint = false;

  // Get data from translations
  const workExperiences = tArray('resume.work');
  const education = tArray('resume.education');
  const projects = tArray('resume.projects');

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:px-6 print:py-4 md:p-16">
      <section className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-4">
        <LanguageSwitcher />
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_CONFIG.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {t(`resume.about.${translationKey}`)}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={t('resume.locationLink')}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {t('resume.location')}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_CONFIG.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_CONFIG.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_CONFIG.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_CONFIG.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_CONFIG.contact.social.map((social) => {
                const IconComponent = ICON_MAP[social.name];
                return (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      {IconComponent && <IconComponent className="size-4" />}
                    </a>
                  </Button>
                );
              })}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_CONFIG.contact.email ? (
                <a href={`mailto:${RESUME_CONFIG.contact.email}`}>
                  <span className="underline">{RESUME_CONFIG.contact.email}</span>
                </a>
              ) : null}
              {RESUME_CONFIG.contact.tel ? (
                <a href={`tel:${RESUME_CONFIG.contact.tel}`}>
                  <span className="underline">{RESUME_CONFIG.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          {!isGeneral && (
            <Avatar className="size-28">
              <AvatarImage alt={RESUME_CONFIG.name} src={RESUME_CONFIG.avatarUrl} />
              <AvatarFallback>{RESUME_CONFIG.initials}</AvatarFallback>
            </Avatar>
          )}
        </div>
        {!isPrint && (
        <Section>
          <h2 className="text-xl font-bold">{t('sections.about')}</h2>
          <p className="text-pretty font-mono text-sm text-gray-800">
            {t(`resume.summary.${translationKey}`)}
          </p>
          </Section>
        )}
        <Section>
          <h2 className="text-xl font-bold">{t('sections.work')}</h2>
          <div className="relative">
            {/* Vertical timeline line - hide on print and mobile */}
            <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-gray-200 print:hidden hidden md:block"></div>
            
            {workExperiences.map((work: any, index: number) => {
              if ((isGeneral || isPrint) && work.company === "Mining X") {
                return null;
              }
              
              // Render gap divider
              if (work.isGap) {
                return (
                  <div key={work.company} className="relative flex items-start gap-4 pb-8 print:pb-4 print:justify-center justify-center md:justify-start">
                    {/* Timeline dot - hide on mobile and print */}
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-gray-300 mt-1 flex-shrink-0 z-10 print:hidden hidden md:flex">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    
                    {/* Gap content */}
                    <div className="flex-1 pt-0.5 print:flex-none print:text-center md:flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm text-gray-600 print:justify-center items-center md:items-start">
                        <Badge variant="outline" className="text-xs font-normal text-gray-600 border-gray-300 w-fit">
                          {work.end ? `${work.start} - ${work.end}` : work.start}
                        </Badge>
                        <span className="hidden md:inline">•</span>
                        <span className="italic">{work.gapText}</span>
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <div key={work.company} className="relative flex items-start gap-4 pb-8 print:pb-4">
                  {/* Timeline dot - hide on mobile and print */}
                  <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 mt-1 flex-shrink-0 z-10 print:hidden hidden md:flex" style={{ borderColor: '#1bc7ad' }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1bc7ad' }}></div>
                  </div>
                  
                  {/* Card content */}
                  <div className="flex-1 md:flex-1">
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-x-2">
                          <h3 className="inline-flex flex-wrap items-center gap-x-1 gap-y-1 font-semibold leading-none text-base">
                            <a className="hover:underline" href={work.link}>
                              {work.company}
                            </a>

                            <span className="inline-flex flex-wrap gap-1">
                              {work.badges?.map((badge: string) => (
                                <Badge
                                  variant="secondary"
                                  className="align-middle text-xs"
                                  key={badge}
                                >
                                  {badge}
                                </Badge>
                              ))}
                            </span>
                          </h3>
                          <div className="text-sm tabular-nums text-gray-500 md:flex-shrink-0">
                            {work.start} - {work.end}
                          </div>
                        </div>

                        <h4 className="font-mono text-sm leading-none mt-1">
                          {work.title}
                        </h4>
                      </CardHeader>
                      <CardContent className="mt-2 text-xs">
                        {work.description}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">{t('sections.education')}</h2>
          {education.map((edu: any, index: number) => {
            return (
              <Card key={edu.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {edu.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {edu.start} - {edu.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{edu.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        {!isPrint && (
        <Section>
            <h2 className="text-xl font-bold">{t('sections.skills')}</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_CONFIG.skills.map((skill) => {
                return <Badge key={skill}>{skill}</Badge>;
              })}
            </div>
          </Section>
        )}

        {!isPrint && (
            <Section className="print-force-new-page scroll-mb-16">
                <h2 className="text-xl font-bold">Projects</h2>
                <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project: any, index: number) => {
                    return (
                        <ProjectCard
                          key={project.title}
                          title={project.title}
                          description={project.description}
                          tags={project.techStack}
                          link={"link" in project ? project.link.href : undefined}
                        />
                    );
                    })}
                </div>
            </Section>
        )}
      </section>

      <CommandMenu
        links={
          RESUME_CONFIG.contact.social.map((social) => ({
            url: social.url,
            title: social.name,
          }))
        }
      />
    </main>
  );
}
