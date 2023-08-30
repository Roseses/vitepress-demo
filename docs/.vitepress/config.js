module.exports = {
    base:'/vue3-vite-cli/',  
    title: 'Vue3-Vite-Cli 中文文档', 
    //首页的描述
    description: '基于vite为基础搭建的风格脚手架,提供多种模板以便于更高效的解决业务需求！', 
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'vitepress-logo-mini.svg' }]],
    themeConfig: {
        socialLinks: [
          { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }
        ],
        footer: {
            message: '其实我也不知道写啥注脚',
            copyright: '那我就随便写个吧',
          }
      }
}
