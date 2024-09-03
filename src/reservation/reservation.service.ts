import { ConflictException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}
  async create(createReservationDto: CreateReservationDto) {

    if (await this.isConflict(createReservationDto.startDate, createReservationDto.endDate)) {
      throw new ConflictException('There is already a reservation for the requested dates.');
    }
    return await this.reservationRepository.save(createReservationDto);
  }

  async findAll() {
    return await this.reservationRepository.find({
      relations: {
        bien: true,
        standardAccount: true,
      },
    });
  }

  async isConflict(startDate: Date, endDate: Date): Promise<boolean> {
    const conflictingReservations = await this.reservationRepository.find({
      where: [
        { startDate: LessThanOrEqual(endDate), endDate: MoreThanOrEqual(startDate) },
      ],
    });

    return conflictingReservations.length > 0;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
