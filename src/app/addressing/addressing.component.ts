import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { networks } from './addressing.model';
import { UIService } from '../shared/ui.service';

@Component({
  selector: 'app-addressing',
  templateUrl: './addressing.component.html',
  styleUrls: ['./addressing.component.css']
})
export class AddressingComponent implements OnInit {
  mask: string;
  result: string = null;
  isLoading = false;

  constructor(private uiService: UIService) { }

  ngOnInit(): void {
  }

  onCalc(form: NgForm): void {
    const stations: number = form.value.stations;
    const jackpot: number = form.value.jackpot;
    const ip: string = form.value.ip;
    const amount: number = jackpot ? jackpot - 2 : stations + 2;
    const mask = this.getMask(amount);
    const ipBinary = this.convertToBinary(ip);
    const maskBinary = this.convertToBinary(mask);
    const broadcastAndNetwork = this.getBroadCastAndNetwork(ipBinary, maskBinary);
    const networkAddres = this.convertToIp(broadcastAndNetwork.networkAddressBinary);
    const broadcastAddress = this.convertToIp(broadcastAndNetwork.broadcastAddressBinary);
    const gateway = this.getGateway(networkAddres.slice());
    const dns = this.getDns(broadcastAddress.slice());
    const firstHostIP = this.getFirstHostIP(networkAddres.slice());

    this.result = `${firstHostIP} | ${mask} | ${gateway} | ${dns}`;
  }

  onCopy(): void {
    this.uiService.showSnackbar('Copied to clickboard!', null, 3000);
  }

  getMask(amount: number): string {
    for (let i = 0; i < networks.length; i++) {
      if (networks[i].hosts < amount) {
        return networks[i - 1].mask;
      }
    }
  }

  getBroadCastAndNetwork(ipBinary: string, maskBinary: string): any {
    let networkAddressBinary = '';
    let broadcastAddressBinary = '';

    for (let i = 0; i < 32; i++) {
      if (maskBinary[i] === '0') {
        networkAddressBinary = networkAddressBinary + '0';
        broadcastAddressBinary = broadcastAddressBinary + '1';
      } else {
        networkAddressBinary = networkAddressBinary + ipBinary[i];
        broadcastAddressBinary = broadcastAddressBinary + ipBinary[i];
      }
      if (((i + 1) % 8) === 0 && i !== 31) {
        networkAddressBinary = networkAddressBinary + '.';
        broadcastAddressBinary = broadcastAddressBinary + '.';
      }
    }
    return { networkAddressBinary, broadcastAddressBinary };
  }

  convertToIp(address: string): number[] {
    return address.split('.').map(o => parseInt(o, 2));
  }

  getGateway(network: number[]): string {
    network[network.length - 1] = (network[network.length - 1] + 1);
    return network.join('.');
  }

  getDns(broadcast: number[]): string {
    broadcast[broadcast.length - 1] = broadcast[broadcast.length - 1] - 1;
    return broadcast.join('.');
  }

  getFirstHostIP(network: number[]): string {
    network[network.length - 1] = (network[network.length - 1] + 2);
    return network.join('.');
  }

  /* tslint:disable:no-bitwise */
  convertToBinary(ip: string): string {
    const octets: number[] = ip.split('.').map(o => +o);
    const binaryArray = octets.map(o => {
      let binary = (o >>> 0).toString(2);
      const octetLength = binary.length;
      if (octetLength < 8) {
        for (let i = 0; i < (8 - octetLength); i++) {
          binary = '0' + binary;
        }
      }
      return binary;
    });
    return binaryArray.toString().split(',').join('');
  }
    /* tslint:enable:no-bitwise */
}
