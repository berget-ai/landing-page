import vikeReact from 'vike-react/config'

export default {
  extends: [vikeReact],
  ssr: true,
  prerender: false,
  title: 'Berget AI - We champion AI sovereignty to unlock innovation and growth in Europe',
  description: 'EU-compliant inference service and AI infrastructure built by developers for developers.',
  redirects: {
    '/blog/ai_in_swedish': '/blog/ai-in-swedish',
    '/blog/berget_update_1': '/blog/berget-update-1',
    '/blog/berget_update_2': '/blog/berget-update-2',
    '/blog/devops_holy_grail': '/blog/devops-holy-grail',
    '/blog/devops_holy_grail_part1': '/blog/devops-holy-grail-part1',
    '/blog/devops_holy_grail_part2': '/blog/devops-holy-grail-part2',
    '/blog/devops_holy_grail_part3': '/blog/devops-holy-grail-part3',
    '/blog/digitalist_berget': '/blog/digitalist-berget',
    '/blog/kubernetes_multi_environment_deployments': '/blog/kubernetes-multi-environment-deployments',
    '/blog/kubernetes_secrets_management': '/blog/kubernetes-secrets-management',
    '/blog/opper_berget%201': '/blog/opper-berget-1',
  },
}
