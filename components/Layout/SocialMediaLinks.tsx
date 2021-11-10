import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaDev, FaTwitter } from 'react-icons/fa'

const links = [
  {
    icon: <FaGithub fontSize="20px" />,
    label: 'GitHub',
    href: 'https://github.com/dastasoft',
  },
  {
    icon: <FaLinkedin fontSize="20px" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dastasoft/',
  },
  {
    icon: <FaTwitter fontSize="20px" />,
    label: 'Twitter',
    href: 'https://twitter.com/dastasoft/',
  },
  {
    icon: <MdEmail fontSize="20px" />,
    label: 'Email',
    href: 'mailto:dastasoft@protonmail.com',
  },
  {
    icon: <FaDev fontSize="20px" />,
    label: 'dev.to',
    href: 'https://dev.to/dastasoft',
  },
]

export default function SocialMediaLinks() {
  return (
    <ButtonGroup variant="ghost" color="tertiary" colorScheme="tertiary">
      {links.map((link) => (
        <IconButton
          key={link.label}
          as="a"
          href={link.href}
          aria-label={link.label}
          icon={link.icon}
        />
      ))}
    </ButtonGroup>
  )
}
