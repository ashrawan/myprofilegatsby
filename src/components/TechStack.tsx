import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCode, faDatabase, faCloud, faTools, faMicrochip, faBrain } from '@fortawesome/free-solid-svg-icons';
import { faDocker, faJira, faGithub, faAws, faJenkins, faNode } from '@fortawesome/free-brands-svg-icons';

interface TechGroup {
  name: string;
  icon: any;
  technologies: {
    name: string;
    icon: string | any;
    type: 'img' | 'fa';
    color?: string;
    url: string;
  }[];
}

const techGroups: TechGroup[] = [
  {
    name: "Backend & Core",
    icon: faCode,
    technologies: [
      { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", type: "img", url: "https://www.java.com/" },
      { name: "Spring", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", type: "img", url: "https://spring.io/" },
      { name: "Node.js", icon: faNode, type: "fa", color: "#68a063", url: "https://nodejs.org/" },
      { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", type: "img", url: "https://www.python.org/" },
    ]
  },
  {
    name: "Frontend & UI",
    icon: faMicrochip,
    technologies: [
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", type: "img", url: "https://reactjs.org/" },
      { name: "Angular", icon: "https://angular.io/assets/images/logos/angular/angular.svg", type: "img", url: "https://angular.io/" },
      { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", type: "img", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", type: "img", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ]
  },
  {
    name: "Database & Cache",
    icon: faDatabase,
    technologies: [
      { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", type: "img", url: "https://www.mysql.com/" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", type: "img", url: "https://www.mongodb.com/" },
      { name: "Redis", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg", type: "img", url: "https://redis.io/" },
      { name: "Cassandra", icon: "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg", type: "img", url: "https://cassandra.apache.org/" },
      { name: "Oracle", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg", type: "img", url: "https://www.oracle.com/" },
      { name: "ElasticSearch", icon: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg", type: "img", url: "https://www.elastic.co/" },
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: faCloud,
    technologies: [
      { name: "AWS", icon: faAws, type: "fa", color: "#FF9900", url: "https://aws.amazon.com/" },
      { name: "Docker", icon: faDocker, type: "fa", color: "#0db7ed", url: "https://www.docker.com/" },
      { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", type: "img", url: "https://kubernetes.io/" },
      { name: "Jenkins", icon: faJenkins, type: "fa", color: "#D24939", url: "https://www.jenkins.io/" },
      { name: "Google Cloud", icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", type: "img", url: "https://cloud.google.com/" },
    ]
  },
  {
    name: "Message & Integration",
    icon: faTools,
    technologies: [
      { name: "Kafka", icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg", type: "img", url: "https://kafka.apache.org/" },
      { name: "RabbitMQ", icon: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg", type: "img", url: "https://www.rabbitmq.com/" },
      { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", type: "img", url: "https://graphql.org/" },
      { name: "OAuth2.0", icon: faShieldAlt, type: "fa", color: "#FF5722", url: "https://oauth.net/2/" },
    ]
  },
  {
    name: "Tools & Others",
    icon: faTools,
    technologies: [
      { name: "Git", icon: faGithub, type: "fa", color: "#ffffff", url: "https://github.com/" },
      { name: "Jira", icon: faJira, type: "fa", color: "#0052CC", url: "https://www.atlassian.com/software/jira" },
      { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", type: "img", url: "https://www.linux.org/" },
      { name: "Nginx", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg", type: "img", url: "https://www.nginx.com/" },
      { name: "Grafana", icon: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg", type: "img", url: "https://grafana.com/" },
    ]
  },
  {
    name: "AI & ML",
    icon: faBrain,
    technologies: [
      { name: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", type: "img", url: "https://www.tensorflow.org/" },
      { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", type: "img", url: "https://pytorch.org/" },
      { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", type: "img", url: "https://openai.com/" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", type: "img", url: "https://huggingface.co/" },
      { name: "LangChain", icon: "https://python.langchain.com/img/favicon.ico", type: "img", url: "https://www.langchain.com/" },
    ]
  },
];

const TechStack: React.FC = () => {
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

  return (
    <section className="py-20 relative" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              onHoverStart={() => setHoveredGroup(groupIndex)}
              onHoverEnd={() => setHoveredGroup(null)}
              className="relative group"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon icon={group.icon} className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" />
                  <h3 className="text-xl font-semibold text-white">{group.name}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.technologies.map((tech) => (
                    <motion.a
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      title={`Visit ${tech.name} official site`}
                    >
                      {tech.type === 'img' ? (
                        <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-2" />
                      ) : (
                        <FontAwesomeIcon
                          icon={tech.icon}
                          className="w-10 h-10 mb-2"
                          style={{ color: tech.color }}
                        />
                      )}
                      <span className="text-sm text-gray-200">{tech.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;