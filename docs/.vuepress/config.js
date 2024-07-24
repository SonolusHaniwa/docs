import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import Prism from 'prismjs/prism.js'
import prismjsPlugin from '@vuepress/plugin-prismjs'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            {
                text: 'Service',
                prefix: '/service/',
                children: [
                    { text: '1. 概述', link: '/service/1.%overview.md' },
                    { text: '2. ハニプレ', link: '/service/2.%20hanipure.md' },
                    { text: '3. ユメステ', link: '/service/3.%20yumesute.md' },
                    { text: '4. Stellarity', link: '/service/4.%20stellarity.md' },
                    { text: '5. Phigros', link: '/service/5.%20phigros.md' },
                ]
            }, { 
                text: 'Server', 
                prefix: '/sonolus-server/',
                children: [
                    {
                        text: "首页",
                        children: [
                            { text: '1. 概述', link: '/sonolus-server/1.%20intro.md' }
                        ]
                    }, {
                        text: '玩家',
                        children: [
                            { text: '2. 安装服务', link: '/sonolus-server/2.%20install.md' },
                            { text: '3. 配置文件标准', link: '/sonolus-server/3.%20config.md' },
                            { text: '4. 服务使用方法', link: '/sonolus-server/4.%20help.md' },
                        ]
                    }, {
                        text: '开发者',
                        children: [
                            { text: '5. 自定义搜索函数', link: '/sonolus-server/5.%20search.md' },
                            { text: '6. 自定义资源创建接口', link: '/sonolus-server/6.%20create.md' },
                            { text: '7. 插件开发标准', link: '/sonolus-server/7.%20plugin.md' },
                        ]
                    }, {
                        text: '其他',
                        collapsable: false,
                        children: [
                            { text: '8. 更新日志', link: '/sonolus-server/8.%20log.md' },
                            { text: '9. 关于 srp 资源包', link: '/sonolus-server/9.%20srp.md' },
                        ]
                    }
                ]
            }, {
                text: "Library - Basic",
                prefix: '/sonolus.h/basic/',
                children: [
                    { text: '1. 搭建开发环境', link: '/sonolus.h/basic/1.%20install.md' },
                    { text: '2. 配置项目信息', link: '/sonolus.h/basic/2.%20config.md' },
                    { text: '3. 基本数据类型及扩展', link: '/sonolus.h/basic/3.%20data.md' },
                    { text: '4. 函数与重要宏定义', link: '/sonolus.h/basic/4.%20function.md' }
                ]
            }, {
                text: 'Library - Play',
                prefix: '/sonolus.h/play/',
                children: [
                    { text: '1. 原型和实体', link: '/sonolus.h/play/1.%20archetypes.md' },
                    { text: '2. 初始化', link: '/sonolus.h/play/2.%20initialization.md' },
                    { text: '3. 屏幕坐标系', link: '/sonolus.h/play/3.%20coordinate.md'},
                    { text: '4. 区块与共享不可变数据', link: '/sonolus.h/play/4.%20blocks.md'},
                    { text: '5. 舞台', link: '/sonolus.h/play/5.%20stage.md' },
                    { text: '6. 音符和实体数据', link: '/sonolus.h/play/6.%20note.md' },
                    { text: '7. BPM 与节拍', link: '/sonolus.h/play/7.%20bpm.md' },
                    { text: '8. 音符生成', link: '/sonolus.h/play/8.%20spawn.md' },
                    { text: '9. 音符绘制', link: '/sonolus.h/play/9.%20draw.md' },
                    { text: '10. 音符输入', link: '/sonolus.h/play/10.%20input.md' },
                    { text: '11. 输入管理器', link: '/sonolus.h/play/11.%20inputManager.md' },
                    { text: '12. 测试关卡', link: '/sonolus.h/play/12.%20level.md' },
                    { text: '13. 输入判定', link: '/sonolus.h/play/13.%20judgment.md' },
                    { text: '14. 输入桶', link: '/sonolus.h/play/14.%20bucket.md' },
                    { text: '15. 经典得分', link: '/sonolus.h/play/15.%20arcade.md' },
                    { text: '16. 生命值', link: '/sonolus.h/play/16.%20life.md' },
                    { text: '17. 音效', link: '/sonolus.h/play/17.%20sfx.md' },
                    { text: '18. 粒子效果', link: '/sonolus.h/play/18.%20particle.md' },
                    { text: '19. 倍速', link: '/sonolus.h/play/19.%20timeScale.md' },
                    { text: '20. 独立下落速度', link: '/sonolus.h/play/20.%20speed.md' },
                    { text: '21. 选项', link: '/sonolus.h/play/21.%20options.md' }
                ]
            }, {
                text: 'Library - Tutorial',
                prefix: '/sonolus.h/tutorial/',
                children: [
                    { text: '1. 概述', link: '/sonolus.h/tutorial/1.%20overview.md' }
                ]
            }, {
                text: 'Library - Preview',
                prefix: '/sonolus.h/preview/',
                children: [
                    { text: '1. 概述', link: '/sonolus.h/preview/1.%20overview.md' },
                    { text: '2. 屏幕', link: '/sonolus.h/preview/2.%20screen.md' },
                    { text: '3. 舞台', link: '/sonolus.h/preview/3.%20stage.md' },
                    { text: '4. 音符与面板数量', link: '/sonolus.h/preview/4.%20note.md' },
                    { text: '5. 音符绘制', link: '/sonolus.h/preview/5.%20draw.md' },
                    { text: '6. 打印时间', link: '/sonolus.h/preview/6.%20print.md' },
                    { text: '7. 绘制刻度', link: '/sonolus.h/preview/7.%20measure.md' },
                    { text: '8. 节拍刻度线', link: '/sonolus.h/preview/8.%20line.md' },
                    { text: '9. BPM', link: '/sonolus.h/preview/9.%20bpm.md' },
                    { text: '10. 倍速', link: '/sonolus.h/preview/10.%20timeScale.md' }
                ]
            }, {
                text: 'Library - Watch',
                prefix: '/sonolus.h/watch/',
                children: [

                ]
            }
        ],
        sidebar: {
            '/sonolus-server/': [
                {
                    text: '首页',
                    children: [
                        { text: '1. 总览', link: '/sonolus-server/1.%20intro.md' }
                    ]
                }, {
                    text: '玩家',
                    children: [
                        { text: '2. 安装服务', link: '/sonolus-server/2.%20install.md' },
                        { text: '3. 配置文件标准', link: '/sonolus-server/3.%20config.md' },
                        { text: '4. 服务使用方法', link: '/sonolus-server/4.%20help.md' },
                    ]
                }, {
                    text: '开发者',
                    children: [
                        { text: '5. 自定义搜索函数', link: '/sonolus-server/5.%20search.md' },
                        { text: '6. 自定义资源创建接口', link: '/sonolus-server/6.%20create.md' },
                        { text: '7. 插件开发标准', link: '/sonolus-server/7.%20plugin.md' },
                    ]
                }, {
                    text: '其他',
                    collapsable: false,
                    children: [
                        { text: '8. 更新日志', link: '/sonolus-server/8.%20log.md' },
                        { text: '9. 关于 srp 资源包', link: '/sonolus-server/9.%20srp.md' },
                    ]
                }
            ],
            "/sonolus.h/": [
                {
                    text: "基础知识",
                    collapsable: false,
                    children: [
                        { text: '1. 搭建开发环境', link: '/sonolus.h/basic/1.%20install.md' },
                        { text: '2. 配置项目信息', link: '/sonolus.h/basic/2.%20config.md' },
                        { text: '3. 基本数据类型及扩展', link: '/sonolus.h/basic/3.%20data.md' },
                        { text: '4. 函数与重要宏定义', link: '/sonolus.h/basic/4.%20function.md' }
                    ]
                }, {
                    text: '游玩模式',
                    collapsible: false,
                    children: [
                        { text: '1. 原型和实体', link: '/sonolus.h/play/1.%20archetypes.md' },
                        { text: '2. 初始化', link: '/sonolus.h/play/2.%20initialization.md' },
                        { text: '3. 屏幕坐标系', link: '/sonolus.h/play/3.%20coordinate.md'},
                        { text: '4. 区块与共享不可变数据', link: '/sonolus.h/play/4.%20blocks.md'},
                        { text: '5. 舞台', link: '/sonolus.h/play/5.%20stage.md' },
                        { text: '6. 音符和实体数据', link: '/sonolus.h/play/6.%20note.md' },
                        { text: '7. BPM 与节拍', link: '/sonolus.h/play/7.%20bpm.md' },
                        { text: '8. 音符生成', link: '/sonolus.h/play/8.%20spawn.md' },
                        { text: '9. 音符绘制', link: '/sonolus.h/play/9.%20draw.md' },
                        { text: '10. 音符输入', link: '/sonolus.h/play/10.%20input.md' },
                        { text: '11. 输入管理器', link: '/sonolus.h/play/11.%20inputManager.md' },
                        { text: '12. 测试关卡', link: '/sonolus.h/play/12.%20level.md' },
                        { text: '13. 输入判定', link: '/sonolus.h/play/13.%20judgment.md' },
                        { text: '14. 输入桶', link: '/sonolus.h/play/14.%20bucket.md' },
                        { text: '15. 经典得分', link: '/sonolus.h/play/15.%20arcade.md' },
                        { text: '16. 生命值', link: '/sonolus.h/play/16.%20life.md' },
                        { text: '17. 音效', link: '/sonolus.h/play/17.%20sfx.md' },
                        { text: '18. 粒子效果', link: '/sonolus.h/play/18.%20particle.md' },
                        { text: '19. 倍速', link: '/sonolus.h/play/19.%20timeScale.md' },
                        { text: '20. 独立下落速度', link: '/sonolus.h/play/20.%20speed.md' },
                        { text: '21. 选项', link: '/sonolus.h/play/21.%20options.md' }
                    ]
                }, {
                    text: '教程模式',
                    collapsible: false,
                    children: [
                        { text: '1. 概述', link: '/sonolus.h/tutorial/1.%20overview.md' }
                    ]
                }, {
                    text: '预览模式',
                    collapsible: false,
                    children: [
                        { text: '1. 概述', link: '/sonolus.h/preview/1.%20overview.md' },
                        { text: '2. 屏幕', link: '/sonolus.h/preview/2.%20screen.md' },
                        { text: '3. 舞台', link: '/sonolus.h/preview/3.%20stage.md' },
                        { text: '4. 音符与面板数量', link: '/sonolus.h/preview/4.%20note.md' },
                        { text: '5. 音符绘制', link: '/sonolus.h/preview/5.%20draw.md' },
                        { text: '6. 打印时间', link: '/sonolus.h/preview/6.%20print.md' },
                        { text: '7. 绘制刻度', link: '/sonolus.h/preview/7.%20measure.md' },
                        { text: '8. 节拍刻度线', link: '/sonolus.h/preview/8.%20line.md' },
                        { text: '9. BPM', link: '/sonolus.h/preview/9.%20bpm.md' },
                        { text: '10. 倍速', link: '/sonolus.h/preview/10.%20timeScale.md' }
                    ]
                }, {
                    text: '观看模式',
                    collapsible: false,
                    children: [

                    ]
                }
            ]
        }
    }),
    
    plugins: [
        prismjsPlugin({
            preloadLanguages: ['cpp', 'bash'],
        }),
        () => {
            return {
                name: "prismjs-sonolus.h",
                extendsMarkdown: () => {
                    Prism.languages.bash.function.pattern = /(^|[\s;|&]|[<>]\()(?:.\/sonolus|.\/main|initcpp|buildcpp|updatecpp|synccpp|serve|play|tutorial|preview|all|add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/
                    Prism.languages.cpp.keyword = /\b(?:playData|previewData|tutorialData|watchData|defineSkins|pair|CustomClass|LevelData|buffer|ifstream|ofstream|SonolusApi|IF|FI|FOR|WHILE|DONE|BREAK|CONTINUE|ELSE|FUNCBEGIN|CLASSBEGIN|var|let|Variable|Array|Map|vector|set|map|string|alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/
                    Prism.languages.cpp.constant = /\b(?:PrintFormat|PrintColor|PreviewDataId|EntityDataId|canvas|Scroll|LevelOptions|ParticleEffectName|EffectClipName|times|SkinSpriteName|ui|touches|RuntimeEnvironment|HorizontalAlign|EntityDespawn|screen|EntityMemoryId|EntityInfoArray|EntityState|VAR|VOID|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
                }
            }
        }
    ],

    lang: 'zh-CN',
    title: 'SonolusHaniwa',
    description: 'Documents for SonolusHaniwa\'s repository',
})