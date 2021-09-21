//import 'babel-polyfill';
//import 'chai';

const StarNotary = artifacts.require('./StarNotary.sol');

let accounts;
let owner;

contract('StarNotary', async(accs)=>{
    accounts = accs;
    owner = accounts[0];
});

it('has correct name', async() => {
    let instance = await StarNotary.deployed();
    let starName = await instance.starName.call();
    assert.equal(starName, 'Awesome Udacity Star');
});

it('can be claimed', async() => {
    let instance = await StarNotary.deployed();
    await instance.claimStar({from: owner});
    let starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);
});

it('can change owner', async() => {
    let instance = await StarNotary.deployed();

    await instance.claimStar({from: owner});
    let starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);

    let secondOwner = accounts[1];
    await instance.claimStar({from: secondOwner});
    starOwner = await instance.starOwner.call();
    assert.equal(starOwner, secondOwner);
});

it('can change name', async() => {
    let instance = await StarNotary.deployed();
    await instance.claimStar({from: owner});
    await instance.changeName('New Name', {from: owner});
    let starName = await instance.starName.call();
    assert.equal(starName, 'New Name');
});