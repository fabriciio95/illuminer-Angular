import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginaPostagem } from '../model/PaginaPostagem';
import { PostagemDestaqueComentario } from '../model/PostagemDestaqueComentario';
import { UsuarioDestaque } from '../model/UsuarioDestaque';
import { EngajamentoService } from '../service/engajamento.service';
import { PostagemService } from '../service/postagem.service';
@Component({
  selector: 'app-engajamento',
  templateUrl: './engajamento.component.html',
  styleUrls: ['./engajamento.component.css']
})
export class EngajamentoComponent implements OnInit {

  usuarioDestaque: UsuarioDestaque = new UsuarioDestaque
  destaqueComentario: PostagemDestaqueComentario = new PostagemDestaqueComentario
  paginaPostagem: PaginaPostagem

  constructor(
    private engajamentoService: EngajamentoService,
    private postagemService: PostagemService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.obterUsuarioDestaque()
    this.obterPostagemDestaqueComentario()
  }
  
  obterUsuarioDestaque(){
    this.engajamentoService.refreshToken()
    this.engajamentoService.usuarioMaisEngajado().subscribe((resp: UsuarioDestaque) => {
      this.usuarioDestaque = resp
    })

  }

  obterPostagemDestaqueComentario(){
    this.engajamentoService.postagemDestaque().subscribe((resp: PostagemDestaqueComentario) => {
      this.destaqueComentario = resp
      
    })

  }
  
  
  scroll(id: any) {
    
    let ele =document.getElementById(id);
    ele?.scrollIntoView();
  }
  
}
