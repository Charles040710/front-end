import {ZhihuCircleFilled} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '项目学习测试';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro1111',
          title: 'baidu',
          href: 'https://baidu.com',
          blankTarget: true,
        },
        {
          key: 'gitlab',
          title: <ZhihuCircleFilled />,
          href: 'https://baidu.com/s?wd=gitlab',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
