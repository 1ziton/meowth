# Meowth
<p align="center">
  <a href="https://github.com/1ziton/meowth/actions"><img alt="GitHub Actions status" src="https://github.com/1ziton/meowth/workflows/build2publish/badge.svg"></a>
</p>

智能化 DevOps 辅助系统，该系统是为了加强 CI/CD 的体验，一些配置可以动态设置，机器人，自动消息推送等；

> 命名起源：项目命名都来源于 Pokemon（宝可梦）漫画的角色。Meowth 名字创意来自英文 meow（猫叫声）和 mouth（嘴）组成，Pokemon 里经典的反派，脑袋上有他标志性的一个大金币，虽然是坏人但因为蠢萌形象，人气也是颇高。

### 技术栈

- nodejs + koa2 + typescript + mongoodb + apidoc(文档生成工具)

### 状态码

- `200` OK
- `401` 客户端错误
- `404` 不存在资源
- `500` 服务内部资源错误

## Feature

- CI/CD 变量配置
- 系统负责人维护
- QQ 机器人消息推送 at 相关人员（上一个为基础），相关参考：[cqrobot](https://github.com/1ziton/cqrobot)
- 定时触发 Pipelines
- 机器人关键词回复（可以制定关键词回复等）
- ……

## Usage

- client & server 依赖安装
- 根目录执行 `npm run start`

Online Demo: http://fex.1ziton.com/meowth

## License

MIT[@1ziton](https://github.com/1ziton)


