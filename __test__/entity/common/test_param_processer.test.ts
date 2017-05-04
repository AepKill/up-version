import { paramProcesser } from '../../../src/entity/common/ParamProcesser';

const param = {
  id: 1111,
  name: 'aepkill',
  sign: '1+1=2',
  items: [
    {
      age: 20
    }
  ]
};

describe('测试 paramProcesser', () => {

  test('处理参数为空', () => {
    expect(paramProcesser(null)).toBe('');
    expect(paramProcesser('')).toBe('');
    expect(paramProcesser('', param)).toBe('');
  });

  test('处理参数', () => {
    expect(paramProcesser('http://aepkill.com/user/:id', param)).toBe(`http://aepkill.com/user/${param.id}`);
    expect(paramProcesser('http://aepkill.com/user/:id/:name', param)).toBe(`http://aepkill.com/user/${param.id}/${param.name}`);
    expect(paramProcesser('http://aepkill.com/user/:id/aepkill/:name', param)).toBe(`http://aepkill.com/user/${param.id}/aepkill/${param.name}`);
  });

  test('处理截断', () => {
    expect(paramProcesser('http://aepkill.com/user/:id/:abcdefg/aepkill/:name')).toBe(`http://aepkill.com/user`);
    expect(paramProcesser('http://aepkill.com/user/:id/:abcdefg/aepkill/:name', param)).toBe(`http://aepkill.com/user/${param.id}`);
    expect(paramProcesser('http://aepkill.com/user/:id/:name/:abcdefg/aepkill/:name', param)).toBe(`http://aepkill.com/user/${param.id}/${param.name}`);
    expect(paramProcesser('http://aepkill.com/:/user/:id/:abcdefg/aepkill/:name', param)).toBe(`http://aepkill.com`);
  });

  test('处理特殊字符', () => {
    expect(paramProcesser('http://aepkill.com/user/:sign', param)).toBe('http://aepkill.com/user/1%2B1%3D2');
  });

  test('处理嵌套对象', () => {
    expect(paramProcesser('http://aepkill.com/user/:items[0].age', param)).toBe(`http://aepkill.com/user/${param.items[0].age}`);
  });

});
